import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';
import {addFav, removeFav} from '../../redux/actions'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';


const Card = ({ id, name, image, status, species, gender, origin, onClose, addFav, removeFav, myFavorites}) => { 
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = ()=>{
    if(isFav){  
        setIsFav(false)
        removeFav(id)
      }
      else{
        setIsFav(true)
        addFav({id, name, image, status, species, gender, origin, onClose})
      }
    }
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

  return(
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      {
        isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
      }
      <img className={styles.cardImg} src={image} alt='' />
    </div>
    <div className={styles.content}>
      <button className={styles.botonCard} onClick={() => onClose(id)}>X</button>
      <NavLink to={`/detail/${id}`} className={styles.cardName}>
        <h3>{name}</h3>
      </NavLink>
      <div className={styles.cardInfo}>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Species:</strong> {species}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Origin:</strong> {origin.name}</p>
      </div>
    </div>
  </div>
)
};
const mapDispatchToProps = (dispatch)=>{
  return { 
   addFav: (character) => {dispatch(addFav(character))},
   removeFav: (id)=> {dispatch(removeFav(id))}
  }
 
}
const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
