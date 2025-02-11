
import React from "react";
import { recents, portfolios, monthlies, testimonials } from "../services/services.data"
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";



export default function Home() {

    // const recent_works = [];


    function HomeBanner(){
        return (
            <>
                <div className="container-fluid fh5co-home-banner">
                    <div className="card">
                        <img className="card-img" src="assets/img/banner-img.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="center-text">
                                <h2 className="card-title">A camera is the save button for the mind’s eye</h2>
                                <a href="#!" className="btn">
                                    <svg width="201" height="51" viewBox="0 0 201 51">
                                        <defs>
                                            <style>
                                                {`
                                                    .cls-1 {
                                                        fill: none;
                                                        stroke-width: 1px;
                                                        stroke: url(#linear-gradient);
                                                    }
                                                `}
                                            </style>
                                            <linearGradient id="linear-gradient" x1="140.508" y1="50.5" x2="60.492" y2="0.5" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#e90e65" />
                                                <stop offset="1" stopColor="#fff" />
                                            </linearGradient>
                                        </defs>
                                        <rect id="Rounded_Rectangle_1" data-name="Rounded Rectangle 1" className="cls-1" x="0.5" y="0.5" width="200" height="50" rx="25" ry="25" />
                                    </svg>
                                    Explorer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fh5co-two-img">
                    <div className="row">
                        <div className="col-sm-6 pr-0 pl-0">
                            <div className="card">
                                <img className="card-img" src="assets/img/girl1.jpg" alt="" />
                                <div className="card-img-overlay"> </div>
                            </div>
                        </div>
                        <div className="col-sm-6 pr-0 pl-0">
                            <div className="card">
                                <img className="card-img" src="assets/img/girl2.jpg" alt="" />
                                <div className="card-img-overlay"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }



    function RecentWork(){

        return (
            <div className="container-fluid fh5co-recent-work">
                <div className="container contact-pop">
                    <div className="row">
                        <div className="col-md-6  pr-0">
                            <div className="card"> 
                                <img className="card-img w-100" src="assets/img/girl3.jpg" alt="" />
                                <div className="card-img-overlay"> </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-0" id="about">
                            <div className="content">
                                <h3>Je suis Fousseni KONATE</h3>
                                <h4>Artiste peintre</h4>
                                <hr />
                                <p>Sed do eiusmod tempor incididunt ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostd exercitation ullamco laboris nisi ut aliquip ex ea mo consequat. Duis aute irure dolor in reprehenderit in ullamco.</p>
                                <a href="#!" className="btn">CONTACT</a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container recent" id="activity">
                    <div className="row">
                        <h2>Récentes oeuvres</h2>
                        <div className="owl-carousel owl-carousel2 owl-theme">
                            {
                                recents.length > 0 && 
                                recents.map((rc, idx)=>
                                    (
                                        <div key={idx}>
                                            <div className="card"> <img className="card-img" src={rc?.image} alt="" />
                                                <div className="card-img-overlay"> 
                                                    <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                                    <div className="bottom-text">
                                                        <h5 className="card-title">{rc?.titre}</h5>
                                                        <p className="card-text">{rc?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Portfolio(){
        return (
            <div className="container-fluid recent fh5co-portfolio" id="portfolio">
                <div className="container">
                    <h2>Portfolios</h2>
                    <div className="row">
                        {
                            portfolios.length > 0 && 
                            portfolios.slice(0, 4).map((rc, idx)=>
                                (
                                    <div key={idx} className={"bx bx-"+(idx+1)}>
                                        <div className="card"> <img className="card-img" src={rc?.image} alt={"img"+idx} />
                                            <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                                <div className="bottom-text">
                                                    <h5 className="card-title">{rc?.titre}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        
                        <div className="bx bx-middle" style={{"padding": "0"}}>
                            {
                                portfolios.length > 4 && 
                                portfolios.slice(4, ).map((rc, idx)=>
                                    (
                                        <div key={idx} className={"bx bx-"+(idx+5)}>
                                            <div className="card"> <img className="card-img" src={rc?.image} alt="img1" />
                                                <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                                    <div className="bottom-text">
                                                        <h5 className="card-title">{rc?.titre}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    function Monthly(){
        return (
            <div className="container-fluid fh5co-recent-work activity">
                <div className="container recent">
                    <div className="row">
                        <h2>Activité du mois</h2>
                        <div className="owl-carousel owl-carousel3 owl-theme">
                            {
                                monthlies.length > 0 && 
                                monthlies.map((rc, idx)=>
                                    (
                                        <div key={idx}>
                                            <div className="card"> <img className="card-img" src={rc?.image} alt="" />
                                                <div className="card-img-overlay">
                                                    <div className="bottom-text">
                                                        <h5 className="card-title">{rc?.titre}</h5>
                                                        <a href="#!">En savoir plus <img src="assets/img/double-right.svg" alt="" /></a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Testimonials(){
        return (
            <div className="container-fluid fh5co-about-me" id="testimonial">
                <div id="my-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="card"> <img className="card-img d-block w-100" src="assets/img/about-me-img.jpg" alt="" />
                            <div className="card-img-overlay">
                                <h2>Ce que les gens pensent de mes oeuvres</h2>
                            </div>
                        </div>
                        {
                            testimonials.length > 0 && 
                            testimonials.map((rc, idx)=>
                                (
                                    <div key={idx} className={idx !==1 ? "carousel-item" : "carousel-item active"}>
                                        <div className="carousel-caption d-md-block"> 
                                            <img src="assets/img/quote-icon.png" alt="" />
                                            <p>{rc?.mot}</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <ol className="carousel-indicators">
                        {
                            testimonials.length > 0 && 
                            testimonials.map((rc, idx)=>
                                (
                                    <li key={idx} className={idx===1 ? "active": ""} aria-current={idx===1 && "location"} data-target="#my-carousel" data-slide-to={idx} > <img src={rc?.image} alt="" /> <span>{rc?.auteur}</span> </li>
                                )
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }

    return (
        <div>
            <HomeBanner />
            <RecentWork />
            <Portfolio />
            <Monthly />
            <Testimonials />
        </div>
    )
}