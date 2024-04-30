import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/modifier-mot-de-passe', { email });
      if (response.data.email === email) {
        console.log(response.data);
        // Rediriger l'utilisateur vers la page de connexion
      } else {
        setError('Cet e-mail n\'est pas enregistré');
      }
    } catch (error) {
      console.error(error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Réinitialiser votre mot de passe</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            style={{ width: '40%',height:'3em' }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">
          Réinitialiser
        </button>
        {error && <div className="text-center mt-3">Si vous n'avez pas de compte, vous pouvez vous <a href="/inscription">Inscrire</a></div>}
      </form>
    </div>
  );
}

export default ResetPassword;