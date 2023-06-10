import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
const [id,setId] = useState("");

const  handleChange = (event) =>{
   setId(event.target.value)
}
   return (
      <div className={styles.nav}>
       <input 
         type='search' 
         placeholder="ID del personaje" 
         onChange={handleChange}
         className={styles.input}
       />
      <div className={styles.boton}>
            <button className={styles.button} onClick={() => {onSearch(id)}}>Agregar</button> 
            </div>
      </div>
   );
}
