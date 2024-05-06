import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa'; 

const LoginFormulaireClient = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [photo, setPhoto] = useState(null);

  const recaptchaRef = React.createRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    const formData = new FormData();
    formData.append('client', JSON.stringify({ nom, prenom, email, mdp, recaptchaValue }));
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/rest/clients/inscription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); 
      navigate("/code-confirmation");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
      }
    }
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(''); 
  }

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100" style={{ fontWeight: 'bold', marginBottom:'10em', marginTop:'10em'}}>
      <Row>
        <Col xs={12} md={6} lg={6} xl={5} order-2 order-lg-1>
        <h1 className="text-center mb-5" style={{ fontWeight: 'bold' }}>INSCRIPTION</h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
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
                      setNomError(''); 
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                    isInvalid={!!nomError}
                  />
                  {nomError && <div className="invalid-feedback">{nomError}</div>}
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
                      setPrenomError(''); 
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)', marginRight: '10px' }}
                    isInvalid={!!prenomError}
                  />
                  {prenomError && <div className="invalid-feedback">{prenomError}</div>}
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
                  setEmailError(''); 
                }}
                style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                isInvalid={!!emailError}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formMdp">
                  <FormLabel>Mot de passe</FormLabel>
                  <div className="password-input-wrapper">
                    <Form.Control
                      type={showPassword ? "text" : "password"} 
                      placeholder="Mot de passe"value={mdp}
                      onChange={(e) => {
                        setMdp(e.target.value);
                        setMdpError(''); 
                      }}
                      style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                      isInvalid={!!mdpError}
                    />
                    <Button variant="light" className="password-toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
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
                      setConfMdpError(''); 
                    }}
                    style={{ width: '100%', height: '40px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}
                    isInvalid={!!confMdpError}
                  />
                  {confMdpError && <div className="invalid-feedback">{confMdpError}</div>}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formPhotoPrestataire">
              <FormLabel>Choisir sa photo de profil</FormLabel>
              <Form.Control
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </Form.Group>
          
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
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Cet homme" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginFormulaireClient;
