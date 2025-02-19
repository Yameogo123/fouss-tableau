
import React, { useState } from "react"
import { emptyAllFields, getInputedValue } from "../../controllers/controller.utils";
import { toast } from "react-toastify";
import { SendMessage } from "../../services/service.api";

export default function ViewFooter(){

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function emptyAll(){
        emptyAllFields([setEmail, setNom, setMessage])
    }

    async function sendIt(e){
        e.preventDefault();
        if(nom && message){
            const mess = `CréaColors Afrique: Message de la part de ${nom} (${email}): ${message}`;
            const to = "+33766422645";
            const data = {
                "app_key": "6074FFEF083EF0830D960740E8",
                "sender": "CréaColors Afrique",
                "content": mess,
                "msisdn":[
                    to
                ]
            }

            const result = await SendMessage(data);
            if(result?.error){
                toast.warning("Message non envoyé. Souci avec le serveur!")
            }else{
                emptyAll();
                toast.success("Message envoyé avec succès.");
            }
            
        }else{
            toast.warning("Veuillez saisir un nom et un message.");
        }
    }

    return (
        <footer id="footer">
            <section>
                <div>
                    <div className="fields">
                        <div className="field">
                            <label for="name">Nom*</label>
                            <input onChange={(e)=>getInputedValue(e, setNom)} type="text" name="name" id="name" />
                        </div>
                        <div className="field">
                            <label for="email">Email / Téléphone</label>
                            <input onChange={(e)=>getInputedValue(e, setEmail)} type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label for="message">Message*</label>
                            <textarea onChange={(e)=>getInputedValue(e, setMessage)} className="fixedSize" name="message" id="message" rows="3" ></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li>
                            <button className="btn" onClick={sendIt}>Envoyer</button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="split contact">
                <section className="alt">
                    <h3>Adresse</h3>
                    <p>10 Allée du Clos des Mûres, <br /> 26240 Laveyron/France </p>
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