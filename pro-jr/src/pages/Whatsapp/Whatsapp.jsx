import React from "react";
import stylesWhatsapp from '../Whatsapp/Whatsapp.module.css';
import whatsapp from '../Whatsapp/img/whatsapp.png';

const Whatsapp = () => {
    return (
        <div className="view">
            {/* FORMATO DO NÚMERO: 112233334444 */}
            <a href="https://wa.me/NÚMERODOCLIENTE" className={stylesWhatsapp.a}>
            <p className={stylesWhatsapp.p}>Entre em contato conosco</p>
            <img classname={stylesWhatsapp.img} src={whatsapp} alt="WHATSAPPBUTTON" />
            </a>
        </div>
    )
}

export default Whatsapp