import React from "react";
import  s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return <div className={s.sidebar}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}><h3>Profile</h3></NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ='/dialogs' activeClassName={s.activeLink}><h3>Messages</h3></NavLink>
        </div>
        <div className={s.item}>
            <a href='/News'><h3>News</h3></a>
        </div>
        <div className={s.item}>
            <a href='/Music'><h3>Music</h3></a>
        </div>
        <div className={s.item}>
            <a href='/Settings'><h3>Settings</h3></a>
        </div>
        <div className={s.item}>
            <a href='/Deleted'><h3>Deleted</h3></a>
        </div>
        <div className={s.item}>
            <a href='/Spam'><h3>Spam</h3></a>
        </div>
    </div>
}
export default Sidebar