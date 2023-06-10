import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import {Route, Routes, useNavigate} from 'react-router-dom';
import About from "./views/About";
import Detail from './views/Detail';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites'

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const navigate = useNavigate();
   const email = "agustinibarperrotta@gmail.com";
   const password = "1quepa"

  function login (userData){
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home')
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
      function onSearch(id){
         axios(`https://rickandmortyapi.com/api/character/${id}/`)
         .then(({ data }) => {
         if (data.name) { 
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });   
   }
   
      function onClose(id){
         setCharacters(characters.filter((char) => char.id !== id))
      }
   return (
      <div className='App'>
         
         <Nav onSearch={onSearch}/>
         <Routes>
         <Route path="/" element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
        
      </div>
   );
}

export default App;

