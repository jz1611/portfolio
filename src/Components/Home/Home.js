import React from 'react';
import './Home.css';

const me = require('./me.jpg');

function Home() {
    return (
        <div id='home-container'>
            <div id='bio-container'>
                <img src={me} alt='jeff zivkovic' />
                <div id='bio-text-box'>
                    <h2>Hi there.</h2>
                    <p>My name is Jeff Zivkovic and I am a software developer looking for my first job. I graduated from Ohio State University with a B.S. in Electrical and Computer Engineering. After a stint working as an operations manager for FedEx Ground, I decided I wouldn't be content until I had a job as a software developer. I completed a web development bootcamp to get a jumpstart, and am now ready for my first opportunity to make an impact at a company that can utilize my skills.</p>
                </div>
            </div>
            <div id='skills-container'>
                <h2 className='home-heading'>Skills</h2>
                <div id='skill-grid'>
                    <h3>Javascript</h3>
                    <h3>HTML5</h3>
                    <h3>CSS3</h3>
                    <h3>React</h3>
                    <h3>Node.js</h3>
                    <h3>Express</h3>
                    <h3>PostgreSQL</h3>
                    <h3>Python</h3>
                    <h3>MongoDB</h3>
                </div>
            </div>
            <div>
                <h2 className='home-heading'>Projects</h2>
                <div>
                    <img alt='man vs. potato' />
                    <h3>Man vs. Potato</h3>
                    <p>Javascript, React, HTML, CSS, etc.</p>
                    <p>Summary goes here.</p>
                </div>
                <div>
                    <img alt='chugging across america' />
                    <h3>Chugging Across America</h3>
                    <p>Javascript, React, HTML, CSS, etc.</p>
                    <p>Summary goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;