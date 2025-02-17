
import React from "react"

export default function ViewFooter(){

    return (
        <footer id="footer">
            <section>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field">
                            <label for="name">Nom</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label for="message">Message</label>
                            <textarea className="fixedSize" name="message" id="message" rows="3" ></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Envoyer" /></li>
                    </ul>
                </form>
            </section>
            <section className="split contact">
                <section className="alt">
                    <h3>Adresse</h3>
                    <p>10, Allée du Clos des Mûres, <br /> France, 26240</p>
                </section>
                <section>
                    <h3>Téléphone</h3>
                    <p><a href="tel:+33766422645">(+33)766422645</a></p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="mailto:contact@lafya-projet-etude.fr">contact@lafya-projet-etude.fr</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li><a href="https://wa.me/33617015964" className="icon brands alt fa-whatsapp"><span className="label">Whatsapp</span></a></li>
                        <li><a href="#!" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#!" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#!" className="icon brands alt fa-tiktok"><span className="label">Tiktok</span></a></li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}