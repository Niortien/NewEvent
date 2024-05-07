import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, FormLabel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';

const SignFormulaire = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [recaptchaError, setRecaptchaError] = useState('');

  const recaptchaRef = React.createRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email ||!password ||!recaptchaValue) {
      if (!email) setEmailError('Veuillez entrer votre adresse e-mail');
      if (!password) setPasswordError('Veuillez entrer votre mot de passe');
      if (!recaptchaValue) setRecaptchaError('Veuillez vérifier que vous êtes un humain');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/connexion', { email, password });
      if (response.data.password === password) {
        navigate("/code-confirmation");
      } else {
        setPasswordError('Mot de passe incorrect');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setRecaptchaError(''); // Réinitialiser l'erreur lorsque le champ reCAPTCHA est rempli
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Gérer la réponse de Google ici
  };

  const responseGoogleFailure = (response) => {
    console.log(response);
    // Gérer l'échec de la connexion avec Google ici
  };

  return (
    <GoogleOAuthProvider clientId="AIzaSyDStHHXU2C5q8cTVMT6HRU3bSyArkI8sOI">
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Row>
          <Col>
            <h1 className="text-center mb-5" style={{ fontWeight: 'bold' }}>CONNEXION</h1>
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
              </Row>
              <Row>
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
                      style={{ width: '100%', height: '40px',marginBottom:'20px'}}
                      isInvalid={!!passwordError}
                    />
                    {passwordError && <div className="invalid-feedback">Ce champ est requis</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfCXsMpAAAAAHRC4sxmBH_7kIT-iRGQi8Geb_KJ"
                    onChange={handleRecaptchaChange}
                    style={{ width: '100%', height: '40px', marginBottom:'40px'}}
                    isInvalid={!!recaptchaError}
                  />
                  {recaptchaError && <div className="invalid-feedback">Ce champ est requis</div>}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit" style={{ width: '100%', height: '40px', marginTop: '10px' , marginBottom:'25px' }}>
                    Se connecter
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <GoogleLogin
                    buttonText="Se connecter avec Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ width: '100%', height: '40px', marginTop: '10px' }}
                    render={(renderProps) => (
                      <button
                        style={{ width: '50%', height: '40px', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onMouseEnter={() => {
                          renderProps.onMouseEnter();
                        }}
                        onMouseLeave={() => {
                          renderProps.onMouseLeave();
                        }}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <FaGoogle style={{ marginRight: '10px', color: renderProps.disabled ? 'gray' : 'white'  }} />
                        Se connecter avec Google
                      </button>
                    )}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignFormulaire;