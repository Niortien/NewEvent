import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
//import ServicesList from "../components/UI/ServicesList";
import ServicesListing from '../pages/SevicesListing'
import Inscription from "../pages/Inscription";
import LoginFormulaireClient from '../components/UI/LoginFormulaireClient'
import LoginFormulairePrestataire from '../components/UI/LoginFormulairePrestataire'
//import ClientLogin from "../pages/ClientLogin";
import SignFormulaire from "../components/UI/SignFormulaire.jsx"
import CodeConfirmation from "../pages/CodeConfirmation.jsx";
<<<<<<< HEAD
import BirthDetails from "../pages/BirthDetails.jsx";
import BirthListing from "../pages/BirthListing.jsx";
import BaptDetails from "../pages/BaptDetails.jsx";
import BapthListing from "../pages/BapthListing.jsx";
import Dashh from  '../pages/Dashh.jsx';
import Accorde from '../pages/Accorde.jsx';
import Issa from "../components/UI/issa.js";
import DashboardDataPrestataire from "../assets/data/DashboardDataPrestataire.js";
import DashboardClient from "../pages/DashboardPrestataire.jsx";
import AjouterDeService from "../pages/AjouterDeService.js";
=======
import ResetPassword from "../pages/ResetPassword.jsx";
import NewPassword from "../components/UI/NewPassword.jsx";
import ListPrestataire from "../components/UI/ListPrestataire.jsx";


>>>>>>> 81e197c53bec46639b66cb7199ef1b2d1d0dc09b
const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/home" />} />
     
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<ServicesListing />} />
      <Route path="/Mariageservice" element={<CarListing />} /> 
      <Route path="/cars/:slug" element={<CarDetails />} />

      <Route path="/Birthservice" element={<BirthListing />} /> 
      <Route path="/birth/:slug" element={<BirthDetails />} />


      <Route path="/Baptservice" element={<BapthListing />} /> 
      <Route path="/bapt/:slug" element={<BaptDetails />} />

      <Route path="/inscription" element={<Inscription />} />
      <Route path="/loginPrestataire" element={<LoginFormulairePrestataire />} />
      <Route path="/loginClient" element={<LoginFormulaireClient />} />
      <Route path="/sign" element={<SignFormulaire />} />
      <Route path="code-confirmation" element={<CodeConfirmation />}/>
<<<<<<< HEAD
      <Route path='/issa'  element={ <Dashh/> } />
=======
      <Route path="reset-password" element ={<ResetPassword />}/>
      <Route path="new-password" element ={<NewPassword />}/>
>>>>>>> 81e197c53bec46639b66cb7199ef1b2d1d0dc09b
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route path='/MesReservations'  element={ <Accorde/> } />
      <Route path='/add'  element={ <AjouterDeService/> } />
   
      <Route path='/prestataire'  element={ <DashboardClient/> } />
      

      <Route path="*" element={<NotFound />} />
<<<<<<< HEAD

=======
      <Route path="/list-prestataire" element = {<ListPrestataire />}/>
>>>>>>> 81e197c53bec46639b66cb7199ef1b2d1d0dc09b
    </Routes>
  );
};

export default Routers;
