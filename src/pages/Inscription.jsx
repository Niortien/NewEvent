import React from 'react'
import Helmet from '../components/Helmet/Helmet' 
import '../styles/inscription.css'
import { Link } from 'react-router-dom'
function Inscription() {
    return (
        
<div className='inscription'>
    

<h1>S'inscrire en tant que </h1>
<div className='inscription-down'>
<Link to='/loginPrestataire' className="inscription-down-left">
 
    <div className="inscription-down-left-write">Prestataire</div>
</Link>
<Link to='/loginClient' className="inscription-down-right">
<div className="inscription-down-right-write">Client</div>
</Link>
</div>
<div className='inscription-up'>
<Link to="/sign"  className='inscription-up-link'>Connexion</Link>
</div>
</div>
     
    )
}

export default Inscription
