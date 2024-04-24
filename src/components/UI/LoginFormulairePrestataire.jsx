import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';

const LoginFormulairePrestataire = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [confMdp, setConfMdp] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [nomError, setNomError] = useState('');
  const [prenomError, setPrenomError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mdpError, setMdpError] = useState('');
  const [confMdpError, setConfMdpError] = useState('');
  const [recaptchaError, setRecaptchaError] = useState('');

  const recaptchaRef = React.createRef();
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    // Définir les critères de mot de passe fort
    const strongRegex = /^(?=.*[@´~#{[|]@^\`|[{#*])(?=.*[a-z])(?=.*[A-Z])[A-Za-z@´~#{[|]@^\`|[{#*\d]{8,}$/;
    return strongRegex.test(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom ||!prenom ||!email ||!mdp ||!confMdp ||!recaptchaValue) {
      if (!nom) setNomError('Veuillez entrer votre nom');
      if (!prenom) setPrenomError('Veuillez entrer votre prénom');
      if (!email) setEmailError('Veuillez entrer votre adresse e-mail');
      if (!mdp) setMdpError('Veuillez entrer votre mot de passe');
      if (!confMdp) setConfMdpError('Veuillez confirmer votre mot de passe');
      if (!recaptchaValue) setRecaptchaError('Veuillez vérifier que vous êtes un humain');
      return;
    }

    if (mdp!== confMdp) {
      setConfMdpError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!isStrongPassword(mdp)) {
      setMdpError('Veuillez utiliser un mot de passe fort contenant au moins un caractère spécial et une combinaison de lettres majuscules et minuscules');
      return;
    }

    // Envoyer les données au serveur
    axios.post('http://localhost:8080/api/v1/rest/prestataires/inscription', { nom, prenom, email, mdp })
  .then(response => {
        // gérer la connexion réussie
        navigate("/code-confirmation");
      })
  .catch(error => {
        // gérer l'erreur lors de la connexion
      });
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(''); // Réinitialiser l'erreur lorsque le champ reCAPTCHA est rempli
  }

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col xs={12} md={6} lg={6} xl={5} order-2 order-lg-1>
        <h1 className="text-center mb-5" style={{ fontWeight: 'bold' }}>INSCRIPTION</h1>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formNom">
                  <FormLabel>Nom</FormLabel>
                  <Form.Control
                    type="text"
                    placeholder="Votre nom"
                    value={nom}
                    onChange={(e) => {
                      setNom(e.target.value);
                      setNomError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                    isInvalid={!!nomError}
                  />
                  {nomError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPrenom">
                  <FormLabel>Prénom</FormLabel>
                  <Form.Control
                    type="text"
                    placeholder="Votre prénom"
                    value={prenom}
                    onChange={(e) => {
                      setPrenom(e.target.value);
                      setPrenomError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)', marginRight: '10px' }}
                    isInvalid={!!prenomError}
                  />
                  {prenomError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formEmail">
              <FormLabel>Email</FormLabel>
              <Form.Control
                type="email"
                placeholder="Votre adresse mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                }}
                style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                isInvalid={!!emailError}
              />
              {emailError && <div className="invalid-feedback">Ce champ est requis</div>}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formMdp">
                  <FormLabel>Mot de passe</FormLabel>
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={mdp}
                    onChange={(e) => {
                      setMdp(e.target.value);
                      setMdpError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                    isInvalid={!!mdpError}
                  />
                  {mdpError && <div className="invalid-feedback">{mdpError}</div>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formConfMdp">
                  <FormLabel>Confirmer le mot de passe</FormLabel>
                  <Form.Control
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={confMdp}
                    onChange={(e) => {
                      setConfMdp(e.target.value);
                      setConfMdpError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                    isInvalid={!!confMdpError}
                  />
                  {confMdpError && <div className="invalid-feedback">{confMdpError}</div>}
                </Form.Group>
              </Col>
            </Row>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfCXsMpAAAAAHRC4sxmBH_7kIT-iRGQi8Geb_KJ"
              onChange={handleRecaptchaChange}
              className="mt-3"
              style={{ borderRadius: '5px', boxShadow: 'none' }}
            />
            {recaptchaError && <div className="invalid-feedback">{recaptchaError}</div>}

            <Button variant="primary" size="lg" block className="mb-4 mt-4" type="submit">
              S'inscrire
            </Button>

            <div className="text-center mb-4">
              <Button variant="outline-danger" size="lg" style={{ marginRight: '10px' }}>
                <FaGoogle />Google
              </Button>
              <Button variant="outline-dark" size="lg">
                <FaApple />Apple
              </Button>
            </div>

            <div className="text-center mt-3">
              Déjà inscrit? <a href="/sign">Se connecter</a>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6} lg={6} xl={7} order-1 order-lg-2 className="d-flex align-items-center justify-content-center">
          <div style={{ borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)', padding: '20px' }}>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginFormulairePrestataire;
