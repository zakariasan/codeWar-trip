import React from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    
     let Cards = data.map( da=>{
                return (
                      <Card 
                          key={da.id}
                img={da.coverImg}
                rating={da.stats.rating}
                reviewCount={da.stats.reviewCount}
                location={da.location}
                title={da.title}
                price={da.price}
                          openSpots={da.openSpots}
            />
                );
            })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {Cards}
            </section>

        </div>
    )
}
