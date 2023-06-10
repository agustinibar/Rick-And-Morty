import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import styles from "../Nav/nav.module.css"
import { useLocation } from 'react-router-dom';

export default function Nav ({onSearch}){
const location = useLocation();

if(location.pathname === "/"){
    return null
}
    return(
        <>
        <nav className={styles.nav}>
        <SearchBar onSearch={onSearch}/>
        <div className={styles.containerButtons}> 
            <Link to="/about">
            <button className={styles.buttonAbout}>About me</button>
            </Link>
            <Link to="/home">
            <button className={styles.buttonHome}>Home</button>
            </Link>
            <Link to="/favorites">
            <button className={styles.buttonAbout}>Favorites</button>
            </Link>
        </div>
       
        </nav>
        </>
        
    )
}
