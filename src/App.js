import React from "react"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"


export default function App(){
    return(
        <div className="container">
            <Info />
            <main className="section-main">
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}