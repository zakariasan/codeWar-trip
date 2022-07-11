import React from "react";
//import memesData from '../memesData'
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg : 'http://i.imgflip.com/1bij.jpg'

    });
    const [allMemeImg, setAllMemeImg] = React.useState([]);

    React.useEffect(async ()=>{
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data =  res.json()
        setAllMemeImg(data.data.memes)
    }, [])
    console.log(allMemeImg)
    function getMemeImage() {
        const memesArray = allMemeImg
        const randomNbr = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNbr].url;
        setMeme(prev =>({
            ...prev,
            randomImg: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(pre=>({
            ...pre,
            [name] : value

        }));

    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick = {getMemeImage}
                className="form--btn">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img src={meme.randomImg} alt="memeImage" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    );
}
