import React from 'react';
import "./Service.css";
import {BsCheckLg} from 'react-icons/bs';

const Service = () =>{
    return(
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container service-container">
                <article className="service">
                    <div className="service-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>AR experience design.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Mobile app UX and UI design services</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Cross-platform experiences design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>UI and UX consulting.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Design workshops</p>
                        </li>
                    </ul>
                </article>
                {/* end of ui/ux */}
                <article className="service">
                    <div className="service-head">
                        <h3>Web Developmenet</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Front-end Development</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Back-end Development</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Webdevelopment Consulting</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Database Connectivity.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Clean, SEO-Friendly</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Security Development</p>
                        </li>
                    </ul>
                </article>
                {/* end of web development */}
                <article className="service">
                    <div className="service-head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Content Management</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Card Creation</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Personal Blog Content</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Bloging Consulting</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>Up Coming Trents</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-icon'/>
                            <p>One to one Hands on</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Service;