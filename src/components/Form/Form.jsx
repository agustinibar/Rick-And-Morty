import React, { useState } from "react";
import style from "./Form.module.css"
import { validateEmail, validatePassword } from "../../validation";

const Form = ({login})=>{
const [userData, setUserData] = useState({
    email: "",
    password: ""
});
const [errors, setErrors] = useState({
});

const handleSubmit = (event)=>{
    event.preventDefault();
   
const emailErrors= validateEmail(userData.email);
const passwordError= validatePassword(userData.password);

setErrors({
    email:emailErrors,
    password:passwordError
});
login(userData)
}



const handleChange = (event)=>{
 const property = event.target.name;
 const value = event.target.value;
 setUserData({...userData, [property]:value})
}   
    return(
        <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <label>Email:
            <input 
            type="text" 
            name="email" 
            value={userData.email} 
            onChange={handleChange}
            className={`${style.input} ${errors.email ? style.wrongEmail : ''}`}
            /> 
            {errors.email && <p>{errors.email}</p>}
          </label>
          <label>Password:
            <input 
            type="text" 
            name="password" 
            value={userData.password} 
            onChange={handleChange}
            className={`${style.input} ${errors.password ? style.wrongEmail : ''}`}
            />
            {errors.password && <p>{errors.password}</p>}
          </label>
          <button type="submit" className={style.button}>Submit</button>
        </form>
      </div>
    );
  };
export default Form