import React from 'react';
import "./About.css";
import working from '../../assets/working.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () =>{
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-img">
                        <img src={working} alt="working on" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className='about-card-icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="about-card">
                            <FiUsers className='about-card-icon'/>
                            <h5>Clients</h5>
                            <small>295+ WorldWide</small>
                        </article>

                        <article className="about-card">
                            <VscFolderLibrary className='about-card-icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p> I'm a front-end developer with over 1 years in the company and over 20 websites developed to date." I have a track record of doing XYZ, which has resulted in a significant boost in sales this quarter alone.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;