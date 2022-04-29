import React from "react";
import "./Footer.css";
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer-logo">Manish</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Expeirience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#porfoli">Portfolio</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-social">
                <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
                <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
                <a href="https://twitter.com" target='_blank'><FaTwitter/></a>
            </div>

            <div className="footer-copyright">
                <small>&copy; Manish Rajbhar. All rights reserve</small>
            </div>
        </footer>
    );
}

export default Footer;