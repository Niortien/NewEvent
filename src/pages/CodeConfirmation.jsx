import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CodeConfirmation() {
    const [code, setCode] = useState('');
    
    const [isSubmitted, setIsSubmitted] = useState(false);

  
    const onSubmit = (e) => {
      e.preventDefault();
      if (!code ) {
        alert('Tous les champs doivent être remplis');
        return;
      }
      axios.post('http://localhost:8080/activation', {
        code: code,
      })
     .then(function (response) {
        console.log(response);
        setIsSubmitted(true); // mettre à jour l'état lorsque la requête est réussie
      })
     .catch(function (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.message); // affiche le message d'erreur renvoyé par l'API
        }
      });
    };
  
    return (
<center style={{ display: 'flex', alignItems: 'center', paddingTop: '30px', height: '100vh',marginLeft: '250px' }}>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
            <h2>Votre code de confirmation ✅ ✅</h2>
        <h6>Le code que vous avez reçu est valable pour 5 minutes </h6>

          <InputGroup>
          
            <InputGroup.Text id="basic-addon1">@ </InputGroup.Text>
            <Form.Control
              placeholder="Veullez entrer le code"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <Row>
             
            <Col xs="auto">
              <Button type="submit" onClick={onSubmit}>
                Envoyer
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      </center>
    );
  }
  
  export default CodeConfirmation;