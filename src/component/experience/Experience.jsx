import React from 'react';
import "./Experience.css";
import { BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Developement</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Html</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Bootstap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Jquery</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience-backend">
                    <h3>Backend Developement</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>JDBC</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Servlet & JEE</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Hibernate</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>Spring boot</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="experience-icon" />
                            <div>
                                <h4>MYSQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;