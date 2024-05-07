import React from 'react';
import '../styles/ajoutDeService.css'
import { useState } from 'react';
import img2 from "../assets/all-images/ava-4.jpg"
const AjouterDeService = () => {
    const [intitulé,setintitulé]=useState("");
    const [name,setname]=useState("");
    
    const [image,setImage]=useState("");
    const [numero,setNumero]=useState("");
    const Service={
        name:name,
        numero:numero,
        intitulé:intitulé,
        image:image
    }

    function handleSubmit(evt){
        evt.preventDefault();
       


    }
    return (
        <div className='ajout-de-service'> 
            <div>
                <h1>Ajouter un service </h1>
            </div>
            <div>
                <form  onSubmit={(evt)=>handleSubmit(evt)} style={{display:'flex',flexDirection:'column'}} >
                <label htmlFor='name' >Entrez le nom de votre Service</label> <br/>
            <input type="text" placeholder="Entrez l'intitulé" id='name' onChange= {(e)=>{setname(e.target.value)}} />
            <br/> <br/>
            <label htmlFor='Numero' >Entrez le prix</label> <br/>
            <input type="text" placeholder='Entrez le prix' id='Numero' onChange= {(e)=>{setNumero(e.target.value)}} />
            <br/> <br/>
            <label htmlFor='poste'>choisssez votre  disponibilié</label>  <br/>
                    <select id='poste'  onChange= {(e)=>{setintitulé(e.target.value)}}  > choisssez son poste
                <option value="jour"  key="">Jour</option>
                <option value="Mois" key="">Mois </option>
                <option value="semaine" key="Attaquant">Semaine</option>
            </select>
            <br/>
            <textarea cols="30" rows="5" placeholder='devrivez votre service...' >
                
            </textarea>
            <br/>
            <input type="submit"  value='ajouter le service'  style={{width:"200px"}} />
                </form>
            </div>
        </div>
    );
}

export default AjouterDeService;
