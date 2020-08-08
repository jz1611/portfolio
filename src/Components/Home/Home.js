import React, {useEffect} from 'react';
import axios from 'axios';
import './Home.css';

function Home() {

    useEffect(() => {
        axios
            .get('/api/test')
            .then(res => {
                console.log(res.data);
            });
    }, []);

    return (
        <div>
            Home
        </div>
    );
}

export default Home;