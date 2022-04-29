import React from 'react';
import "./Profile.css";
import img1 from '../../assets/digitalWatch.png';
import img2 from '../../assets/3dCube.png';
import img3 from '../../assets/nonProfit.png';
import img4 from '../../assets/snakeGame.png';
import img5 from '../../assets/ToDo.png';
import img6 from '../../assets/university.png';


const data = [
    {
        id: 1,
        image: img1,
        title: 'This is a Digital Clock',
        github: "https://github.com",
        demo: 'https://manishrajbhar1998.github.io/digitalClock/'
    },
    {
        id: 2,
        image: img2,
        title: '3dCube Animation',
        github: "https://github.com",
        demo: "https://manishrajbhar1998.github.io/3d-Cube/"
    },
    {
        id: 3,
        image: img3,
        title: 'Non Profit Organization webpage',
        github: "https://github.com",
        demo: 'https://manishrajbhar1998.github.io/manavsewadal/'
    },
    {
        id: 4,
        image: img4,
        title: 'Snake Game',
        github: "https://github.com",
        demo: 'https://manishrajbhar1998.github.io/snake-game/'
    },
    {
        id: 5,
        image: img5,
        title: 'This is a Digital Clock',
        github: "https://github.com",
        demo: 'https://manishrajbhar1998.github.io/To-Do/'
    },
    {
        id: 6,
        image: img6,
        title: 'University Webpage',
        github: "https://github.com",
        demo: 'https://manishrajbhar1998.github.io/full-web-1/'
    },
]


const Profile = () => {
    return (
        <section id='porfoli'>
            <h5>My Recent Work</h5>
            <h2>Porfolio</h2>

            <div className="container portfolio-container">

                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-item-cta">
                                    <a href={github} className='btn' target='_black'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_black'>Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }

            </div>
        </section>
    );
}

export default Profile;