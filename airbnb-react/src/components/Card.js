import React from 'react'

export default function Card(props){
    let badgeTxt;
    if(props.openSpots === 0){
        badgeTxt = "SOLD OUT";
    }else if(props.location === 'Online'){
        badgeTxt = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeTxt && <div className="card--badge">{badgeTxt}</div>}
            <img src={`./images/${props.img}`} alt="Katie-zaferes" className="card--img"/>
            <div className="card--status">
                <img src='./images/Star1.png' alt="star-Img" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person </p>
        </div>

    );

}
