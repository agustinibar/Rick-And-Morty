import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../views/detail.module.css"

export default function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        
        return setCharacter({});
     }, [id]);
     return (
      <div className={styles.detailContainer}> 
         <section className={styles.sectionData}>
            <h2>Name |  {character.name}</h2>
            <h2>Status |  {character.status}</h2>
            <h2>Specie |  {character.species}</h2>
            <h2>Gender |  {character.gender}</h2>
            <h2>Origin |  {character.origin?.name}</h2>
         </section>
         <section className={styles.image}>
            <img src={character.image} alt="img" />
         </section>
      </div>
     
     )
    }
    