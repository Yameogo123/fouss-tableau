
import React from "react"

export default function ViewNavbar(){

    function myFunction(e) {
        e.currentTarget.classList.toggle("change");
    }

    return (
        <nav className="navbar navbar-expand-md fixed-top maine-menu">
            <div className="container">
                <button className="navbar-toggler ml-auto" data-target="#my-nav" onClick={myFunction} data-toggle="collapse"> 
                    <span className="bar1"></span> 
                    <span className="bar2"></span> 
                    <span className="bar3"></span> 
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active"> <a className="nav-link" href="/">Home</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#about" tabIndex="-1" aria-disabled="true">About</a></li>
                        <li className="nav-item"> <a className="nav-link" href="#activity" tabIndex="-1" aria-disabled="true">Activity</a></li>
                        <li className="nav-item"> <a className="nav-link" href="#portfolio" tabIndex="-1" aria-disabled="true">Portfolio</a></li>
                        <li className="nav-item"> <a className="nav-link" href="#testimonial" tabIndex="-1" aria-disabled="true">Testimonial</a></li>
                        <li className="nav-item"> <a className="nav-link" href="blog" tabIndex="-1" aria-disabled="true">Blog</a></li>
                        <li className="nav-item"> <a className="nav-link" href="#contact" tabIndex="-1" aria-disabled="true">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}