import React from "react";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmail = (email) => {
if(!email){
    return "El email no puede estar vacio"
}else if (email.length > 35){
    return "El email no puede tener mas de 35 caracteres"
}else if (!emailRegex.test(email)){
    return "Email invalido"
}
return ""
}
export const validatePassword = (password) =>{
    if (!/\d/.test(password)) {
        return "La contraseña debe contener al menos un número.";
      }else if(password.length < 6 || password.length > 10){
        return "La contraseña debe tener entre 6 y 10 caracteres"
      }
      
return ""
}

