import React, {useEffect} from 'react';
import axios from 'axios';
import './Home.css';

function Home() {

    useEffect(() => {
        axios
            .get('/api/test')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div id='home-container'>
            <div id='bio-container'>
                <img alt='jeff zivkovic' />
                <div>
                    <h2>Hi there.</h2>
                    <p>My name is Jeff Zivkovic and I am a software developer looking for my first job.</p>
                </div>
            </div>
            <div>
                <h2>Hard Skills</h2>
                <div>
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
                <h2>Projects</h2>
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