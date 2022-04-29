import React, { Profiler } from "react";
import "./App.css";
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Service from './component/service/Service';
import Profile from './component/profile/Profile';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

const App = () =>{
    return (
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Service/>
            <Profile/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;