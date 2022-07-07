import React from "react"
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    let cardsElem = data.map(el => {
        return(
            <div>
            <Card 
                {...el}
            />
                {data[data.length - 1] === el?false:true && <hr />}
                </div>
        );
    })
    return (
        <div>
            <Navbar />
            <section>
                {cardsElem}
            </section>
            <footer>
	<p>Copyright &copy; 2022 Zak_4r1A.</p>
</footer>
        </div>
    )
}
