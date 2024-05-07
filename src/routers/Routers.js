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
      <Route path='/issa'  element={ <Dashh/> } />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route path='/MesReservations'  element={ <Accorde/> } />
      <Route path='/add'  element={ <AjouterDeService/> } />
   
      <Route path='/prestataire'  element={ <DashboardClient/> } />
      

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
