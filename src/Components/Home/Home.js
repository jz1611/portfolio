import React from 'react';
import './Home.css';

const me = require('./me.jpg');
const mvp = require('./mvp.png');
const chugging = require('./chugging.png');
const internet = require('./internet.png');
const github = require('./github.png');

function Home() {
    return (
        <div id='home-container'>
            <div id='bio-container'>
                <img src={me} alt='jeff zivkovic' />
                <div id='bio-text-box'>
                    <h2>Hi there.</h2>
                    <p>My name is Jeff Zivkovic and I am a software developer looking for my first job. I am a graduate of Ohio State University with a B.S. in Electrical and Computer Engineering. After a stint working as an operations manager for FedEx Ground, I decided I wouldn't be content until I had a job as a software developer. I completed a fullstack web development bootcamp to get a jumpstart, and am now ready for my first opportunity to make an impact at a company that can utilize my skills.</p>
                </div>
            </div>
            <div id='skills-container'>
                <h2 className='home-heading'>Skills</h2>
                <div id='skill-grid'>
                    <h3>Javascript</h3>
                    <h3>HTML5</h3>
                    <h3>CSS3</h3>
                    <h3>React</h3>
                    <h3>Redux</h3>
                    <h3>Node.js</h3>
                    <h3>Express</h3>
                    <h3>PostgreSQL</h3>
                    <h3>Python</h3>
                    <h3>MongoDB</h3>
                    <h3>Git</h3>
                </div>
            </div>
            <div id='projects-container'>
                <h2 className='home-heading'>Projects</h2>
                <div id='project-grid'>
                    <div className='project'>
                        <img src={mvp} alt='man vs. potato' />
                        <h3>Man vs. Potato</h3>
                        <p className='project-skills'>Javascript, React, HTML, CSS, Redux, bCrypt, Express, PostgreSQL, Stripe, Axios</p>
                        <p className='project-description'>A fullstack web app for a fictional race. This site allowed for users to register for the race, edit their accounts, view and submit race times, and purchase items from a shop.</p>
                        <div className='project-links-container'>
                            <a href='https://github.com/jz1611/man-vs-potato' target='_blank' rel='noopener noreferrer'>
                                <img src={github} alt='github' className='github-icon'/>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={chugging} alt='chugging across america' />
                        <h3>Chugging Across America</h3>
                        <p className='project-skills'>Javascript, React, HTML, CSS, Axios, Express, bCrypt, Google Maps API</p>
                        <p className='project-description'>A fullstack web app that can find breweries along a route given two locations, shows beer reviews and ratings, and allows for user profile creation and editing.</p>
                        <div className='project-links-container'>
                            <a href='https://chuggingcrossamerica.com' target='_blank' rel='noopener noreferrer'>
                                <img src={internet} alt='globe' className='internet-icon'/>
                            </a>
                            <a href='https://github.com/jz1611/chugging-across-america' target='_blank' rel='noopener noreferrer'>
                                <img src={github} alt='github' className='github-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;