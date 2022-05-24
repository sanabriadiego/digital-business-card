import React from "react"

export default function Info(){
    return(
        <header>
            <img className="header-img" src="./diego-sanabria.jpg" alt="diego sanabria"/>
            <div className="header-info-container">
                <div className="header-title-container">
                    <h1>Diego Sanabria</h1>
                    <h2>Frontend Developer</h2>
                    <h3>diegosanabria.website</h3>
                </div>
                <div className="header-button-container">
                    <a href="#" className="header-button-container-email"><i class="fa-solid fa-envelope"></i>Email</a>
                    <a href="https://www.linkedin.com/in/sanabriadiego/" className="header-button-container-linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
        </header>
    )
}