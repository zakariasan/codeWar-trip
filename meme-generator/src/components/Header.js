import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img
                className="header--img"
                src="./images/Troll Face.png"
                alt="TroolFace"
            />
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}
