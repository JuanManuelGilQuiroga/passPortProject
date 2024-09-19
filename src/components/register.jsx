import React from "react";
import { Form, Link } from "react-router-dom";
import "../register.css";

export const registerAction = async({request}) => {
  let data = await request.formData()
  console.log(request.body)
  console.log(Object.fromEntries(data))
  let res = await fetch('')
  return ("hola")
}


export function Register(){
    return (
        <main>
            <div className="form">
              <p>Registrate para continuar,<span>Completa el formulario</span></p>
              <Form action="/register" method="POST">
                <input type="text" placeholder="Nick" name="nombre" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="password" placeholder="Contraseña" name="password" required/>
                <input type="password" placeholder="Confirma tu Contraseña" name="confirmpassword" required/>
                <div className="separator"><div/></div>
                <input type="submit" className="oauthButton" placeholder="Continua"/>
              </Form>
              <span>Ya tienes cuenta?, <Link to="/login">Logeate</Link></span>
          </div>
        </main>
    )
}

