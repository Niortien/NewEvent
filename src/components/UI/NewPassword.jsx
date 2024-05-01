import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function NewPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Ajout de useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       await axios.post('http://localhost:8080/nouveau-mot-de-passe', { email, code, password });

        navigate('/dashboard'); // Redirection vers /dashboard
     
    } catch (error) {
      console.error(error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5">Mettre à jour votre mot de passe</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            style={{ width: '40%', height: '3em' }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Code reçu</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="code"
            style={{ width: '40%', height: '3em' }}
            value={code}
            onChange={(event) => setCode(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="newPassword"
            style={{ width: '40%', height: '3em' }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default NewPassword;