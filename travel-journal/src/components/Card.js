import React from 'react'

export default function Card(props){
    return (
        <div>
        <div className="card">
            <div className="card--img">
                <img src={props.imageUrl} alt={props.title} />
            </div>
        <div className="card--info">

               <img src="./images/local.svg" alt="local-area" />
                <span className="card--iPlace">{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl}>View on Google Maps </a>
                <h1>{props.title}</h1>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
        </div>
        </div>
            
        </div>
    );

}
