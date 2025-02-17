
import React from "react";
import ViewFooter from "./template/view.footer";
import { recents } from "../services/services.data"
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";



export default function Home() {



    function HomeBanner(){
        return (
            <div id="intro">
                <h1>CréaColors Afrique</h1>
                <p>
                    A free, fully responsive HTML5 + CSS3 site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a><br />
                    and released for free under the <a href="https://html5up.net/license">Creative Commons license</a>.
                </p>
                <ul className="actions">
                    <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                </ul>
            </div>
        )
    }



    function Header(){

        return (
            <header id="header">
                <a href="/" className="logo">Massively</a>
            </header>
        )
    }

    function Nav(){
        return (
            <nav id="nav">
                <ul className="links">
                    <li className="active"><a href="/">CréaColors Afrique</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="https://wa.me/33617015964" className="icon brands fa-whatsapp"><span className="label">Whatsapp</span></a></li>
                    <li><a href="#!" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#!" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#!" className="icon brands fa-tiktok"><span className="label">Tiktok</span></a></li>
                </ul>
            </nav>
        )
    }
    
    function FeaturedPost(){
        return (
            <article className="post featured">
                <header className="major">
                    <span className="date">« Le pont du bonheur »</span>
                    <h4>80/80 cm</h4>
                    <h5>275€</h5>
                    <p>
                        Matières : Toile, plâtre, bombes, fil, tissus bogolan en coton pur à motifs dogon, colle.
                    </p>
                </header>
                <a href="#!" className="image main"><img src="assets/images/top.png" alt="top" /></a>
            </article>
        )
    }

    function Posts(){
        return (
            <section className="posts">
                {
                    recents.length > 0 && recents.map(
                        (item, idx)=>(
                            <article key={idx}>
                                <header>
                                    <span className="date">{item?.titre}</span>
                                    <h4><a href="#!">{item?.taille}<br /> {item?.prix}</a></h4>
                                </header>
                                <a href="#!" className="image fit"><img src={item?.image} alt="" /></a>
                                <p>{item?.description}</p>
                                {/* <ul className="actions special">
                                    <li><a href="#!" className="button">Full Story</a></li>
                                </ul> */}
                            </article>
                        )
                    )
                }
            </section>
        )
    }

    function Copyright(){
        return (
            <div id="copyright">
                <ul><li>&copy; TnT</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
            </div>
        )
    }

    return (
        <div>
            <HomeBanner />
            <Header />
            <Nav />

            <div id="main">
                <FeaturedPost />
                <Posts />

                <ViewFooter />
                <Copyright />
            </div>

        </div>
    )
}