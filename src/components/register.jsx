import React from "react";
import { Form, Link } from "react-router-dom";
import "../register.css";

export const registerAction = async({request}) => {
  let data = Object.fromEntries(await request.formData())
  let res = await fetch('http://localhost:3000/auth/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log(JSON.stringify(data))
  let user = await res.json()
  return user
}


export function Register(){
    return (
        <main>
            <div className="form">
              <p>Registrate para continuar,<span>Completa el formulario</span></p>
              <Form action="/register" method="POST">
                <input type="text" placeholder="Nick" name="nick" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="password" placeholder="Contraseña" name="password" required/>
                <input type="password" placeholder="Confirma tu Contraseña" name="password" required/>
                <div className="separator"><div/></div>
                <input type="submit" className="oauthButton" placeholder="Continua"/>
              </Form>
              <span>Ya tienes cuenta?, <Link to="/login">Logeate</Link></span>
          </div>
        </main>
    )
}

