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

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const navigate = useNavigate();
   const email = "agustinibarperrotta@gmail.com";
   const password = "1quepa"

   async function login(userData) {
      try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
            setAccess(data);
            access && navigate('/home');

         } catch (error) {
            console.log(error.message)
         }
      // .then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      // });
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
      async function onSearch(id){
         try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
           
             if (data.name) { 
              setCharacters((oldChars) => [...oldChars, data])
             };
         } catch (error) {
            window.alert('¡No hay personajes con este ID!');
        }
       
   };
   
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

