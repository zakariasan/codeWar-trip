import React from 'react';
import twitter from './twitter.svg'
import facebook from './facebook.svg'
import insta from './insta.png'
import git from './github.svg'
export default function Footer(){
    return (
        <div className="footer">
            <div><img src={twitter}/></div>
            <div><img src={facebook}/></div>
            <div><img src={insta}/></div>
            <div><img src={git}/></div>
        </div>
    );
}
