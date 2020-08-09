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
        <div>
            Home
        </div>
    );
}

export default Home;