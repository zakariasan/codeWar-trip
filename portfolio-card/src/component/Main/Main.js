import React from 'react';
import env from './enve.svg'
import link from './linkedin-brands.svg'

export default function Main(){
    return (
        <div className="main">
            <h1>Zak Haouzan</h1>
            <h3>Backend Developer</h3>
            <h4>zak_4r1A.website</h4>

            <div className="main--btns">
                <button className="b1"><img src={env} width="25px"/> Email </button>
                <button className="b2" > <img src={link} width="30px"/> LinkedIn </button>
            </div>
            <div className="main--info">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>  
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. </p>  
            </div>
        </div>
    );
}
