import React from 'react';
import '../../css/reset.css'
import '../../css/index.css';
import Header from '../../components/header/header.js';
import BodyHome from './bodyHome.js';


function Home() {
    return (
        <div>
            <Header />
            <BodyHome />
        </div>
    );
}

export default Home;