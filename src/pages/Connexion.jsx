import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';

// Import des icônes
import { FaGoogle, FaApple } from 'react-icons/fa';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [recaptchaError, setRecaptchaError] = useState('');

  const recaptchaRef = React.createRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !recaptchaValue) {
      if (!email) setEmailError('Veuillez entrer votre adresse e-mail');
      if (!password) setPasswordError('Veuillez entrer votre mot de passe');
      if (!recaptchaValue) setRecaptchaError('Veuillez vérifier que vous êtes un humain');
      return;
    }

    axios.post('http://localhost:8080/connexion')
     .then(response => {
        // handle successful login
        navigate("/code-confirmation");
      })
     .catch(error => {
        // handle error during login
      });
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(''); // Réinitialiser l'erreur lorsque le champ reCAPTCHA est rempli
  }

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Bienvenue à Event Planner</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
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
                    style={{ width: '100%', height: '40px' }}
                    isInvalid={!!emailError}
                  />
                  {emailError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <FormLabel>Mot de passe</FormLabel>
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(''); // Réinitialiser l'erreur lorsque l'utilisateur commence à saisir
                    }}
                    style={{ width: '100%', height: '40px' }}
                    isInvalid={!!passwordError}
                  />
                  {passwordError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Form.Group>
              </Col>
            </Row>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfCXsMpAAAAAHRC4sxmBH_7kIT-iRGQi8Geb_KJ"
              onChange={handleRecaptchaChange}
              className="mt-3"
            />
            {recaptchaError && <div className="invalid-feedback">Ce champ est requis</div>}

            <Button variant="primary" size="lg" block className="mb-4 mt-4" type="submit">
              Se connecter
            </Button>

            {/* Boutons de connexion avec Google et Apple */}
            <div className="text-center mb-4">
              <Button variant="outline-danger" size="lg" style={{ marginRight: '10px' }}>
                <FaGoogle />Google
              </Button>
              <Button variant="outline-dark" size="lg">
                <FaApple />Apple
              </Button>
            </div>

            <div className="text-center mt-3">
              Pas encore inscrit? <a href="/code-confirmation">Se connecter</a>
            </div>
          </Form>
        </Col>
     
      </Row>
    </Container>
  );
};

export default Connexion;
