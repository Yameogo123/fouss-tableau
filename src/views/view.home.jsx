
import React, { useState, useMemo } from "react";
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";



export default function Home() {

    const recent_works = [];


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
                                    Explore
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
                            <div className="card"> <img className="card-img w-100" src="assets/img/girl3.jpg" alt="" />
                                <div className="card-img-overlay"> </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-0" id="about">
                            <div className="content">
                                <h3>I am Sandra Reigel</h3>
                                <h4>Professional photographer</h4>
                                <hr />
                                <p>Sed do eiusmod tempor incididunt ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostd exercitation ullamco laboris nisi ut aliquip ex ea mo consequat. Duis aute irure dolor in reprehenderit in ullamco.</p>
                                <a href="#!" className="btn">CONTACT</a> </div>
                            </div>
                        </div>
                    </div>
                    <div className="container recent" id="activity">
                        <div className="row">
                        <h2>Recent works</h2>
                        <div className="owl-carousel owl-carousel2 owl-theme">
                            <div>
                                <div className="card"> <img className="card-img" src="assets/img/recent-img1.jpg" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Model photography</h5>
                                            <p className="card-text">Digital, Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card"> <img className="card-img" src="assets/img/recent-img2.jpg" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Product photography</h5>
                                            <p className="card-text">Digital, Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card"> <img className="card-img" src="assets/img/recent-img3.jpg" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Tour and potrait</h5>
                                            <p className="card-text">Digital, Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card"> <img className="card-img" src="assets/img/recent-img4.jpg" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Classical photography</h5>
                                            <p className="card-text">Digital, Photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <div className="bx bx-1">
                            <div className="card"> <img className="card-img" src="assets/img/portfolio-img1.png" alt="" />
                                <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                    <div className="bottom-text">
                                        <h5 className="card-title">Natural site</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bx bx-2">
                            <div className="card"> <img className="card-img" src="assets/img/portfolio-img2.png" alt="" />
                                <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                    <div className="bottom-text">
                                        <h5 className="card-title">Vacation special photography</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bx bx-3">
                            <div className="card"> <img className="card-img" src="assets/img/portfolio-img3.png" alt="" />
                                <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                    <div className="bottom-text">
                                        <h5 className="card-title">Product photography</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bx bx-4">
                            <div className="card"> <img className="card-img" src="assets/img/portfolio-img4.png" alt="" />
                                <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                    <div className="bottom-text">
                                        <h5 className="card-title">Historical place shots</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bx bx-middle" style={{"padding": "0"}}>
                            <div className="bx bx-5">
                                <div className="card"> <img className="card-img" src="assets/img/portfolio-img5.png" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon"/></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Lorem ipsum dolor</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bx bx-6">
                                <div className="card"> <img className="card-img" src="assets/img/portfolio-img6.png" alt="" />
                                    <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                        <div className="bottom-text">
                                            <h5 className="card-title">Lorem ipsum dolor</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bx bx-7">
                                    <div className="card"> <img className="card-img" src="assets/img/portfolio-img7.png" alt="" />
                                        <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                            <div className="bottom-text">
                                                <h5 className="card-title">Portraits</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bx bx-8">
                                    <div className="card"> <img className="card-img" src="assets/img/portfolio-img8.png" alt="" />
                                        <div className="card-img-overlay"> <a href="#!"><img src="assets/img/heart.png" className="heart" alt="heart icon" /></a>
                                            <div className="bottom-text">
                                                <h5 className="card-title">Wedding photography</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    return (
        <div>
            <HomeBanner />
            <RecentWork />
            <Portfolio />
        </div>
    )
}