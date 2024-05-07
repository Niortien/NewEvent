import React from 'react';
import '../styles/DashboardDetails.css'
import img1 from '../assets/all-images/anni1.jpg'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";



const DashboardDetailsPrestataire = (props) => {
    
    return (
        <div className='DashboardDetails' >
             <div className="hauts">
            
                <Link className="upi-righht prestata" to='/service' >liste des services </Link>
                <div className="Information upi">
            <div className="upi-left">
                <div className="noms"><h1>{props.Data.Nom}</h1></div>
                <div className="prenoms"><h2>{props.Data.Prenom}</h2></div>
            </div>
            <div className="photo">
                    <img src={img1} alt="" />
                </div>
             </div>

             </div>
            <div className="part ones">
              
        <div className='Information-perso'>
        
            <div className="Information-perso downn">
                <div className='emails'>
                    <div className='uppi'>
                    <CiMail style={{fontSize:'23px',color:'orange'}} />
                    <h5>Email</h5>
                    </div>
                    <span>{props.Data.email}</span>
                </div>

                <div className='pays'>
                    <div className='uppi'>
                    <IoLocationOutline style={{fontSize:'23px',color:'orange'}} />
                    <h5>Pays</h5>
                    </div>
                    <span>{props.Data.Pays}</span>
                </div>

                <div className='telephones'>
                    <div className='uppi'>
                    <BsTelephone  style={{fontSize:'23px',color:'orange'}}/>
                    <h5>Telephone</h5>
                    </div>
                    <span>{props.Data.Numero}</span>
                </div>
                
            </div>
        </div>
            
            </div>
            <div className="part twos">
                <Link to='/liste' className="boxo prestatai">Ajouter une nouvelle reservations</Link>
                <Link className="boxo prestatair" to='/MesReservations ' >Mes reservations </Link>
                
            </div>
            <div className="part threes"></div>
        </div>
    );
}

export default DashboardDetailsPrestataire ;
