import React from "react";
import s from "./Footer.module.css";


const Footer = ()=>{
    return <footer className={s.footer}>
        <div className={s.item}>About us</div>
        <div className={s.item}>Services</div>
        <div className={s.item}>Contact us</div>
        <div className={s.item}>Social media</div>
    </footer>
}
export default Footer