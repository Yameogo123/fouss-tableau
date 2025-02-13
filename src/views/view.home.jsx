
import React from "react";
import ViewFooter from "./template/view.footer";
//import { recents, portfolios, monthlies, testimonials } from "../services/services.data"
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";



export default function Home() {

    // const recent_works = [];


    function HomeBanner(){
        return (
            <div id="intro">
                <h1>This is<br /> Massively</h1>
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
                    <li className="active"><a href="/">This is Massively</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="#!" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#!" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#!" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#!" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                </ul>
            </nav>
        )
    }
    
    function FeaturedPost(){
        return (
            <article className="post featured">
                <header className="major">
                    <span className="date">April 25, 2017</span>
                    <h2><a href="#!">And this is a<br /> massive headline</a></h2>
                    <p>
                        Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
                        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
                        amet nullam sed etiam veroeros.
                    </p>
                </header>
                <a href="#!" className="image main"><img src="assets/images/pic01.jpg" alt="" /></a>
                <ul className="actions special">
                    <li><a href="#!" className="button large">Full Story</a></li>
                </ul>
            </article>
        )
    }

    function Posts(){
        return (
            <section className="posts">
                <article>
                    <header>
                        <span className="date">April 24, 2017</span>
                        <h2><a href="#!">Sed magna<br />
                        ipsum faucibus</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic02.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 22, 2017</span>
                        <h2><a href="#!">Primis eget<br />
                        imperdiet lorem</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic03.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 18, 2017</span>
                        <h2><a href="#!">Ante mattis<br />
                        interdum dolor</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic04.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 14, 2017</span>
                        <h2><a href="#!">Tempus sed<br />
                        nulla imperdiet</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic05.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 11, 2017</span>
                        <h2><a href="#!">Odio magna<br />
                        sed consectetur</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic06.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 7, 2017</span>
                        <h2><a href="#!">Augue lorem<br />
                        primis vestibulum</a></h2>
                    </header>
                    <a href="#!" className="image fit"><img src="assets/images/pic07.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#!" className="button">Full Story</a></li>
                    </ul>
                </article>
            </section>
        )
    }

    function Copyright(){
        return (
            <div id="copyright">
                <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
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