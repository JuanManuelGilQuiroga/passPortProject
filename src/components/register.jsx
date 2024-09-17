import React from "react";
import "../register.css"



export function Register(){
    return (
        <main>
            <div className="form">
              <p><span>Registrate para continuar</span></p>
              <div className="separator"><div/></div>
              <Form>
                <input type="text" placeholder="Nick" name="nombre" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="password" placeholder="Contraseña" name="password" required/>
                <input type="password" placeholder="Confirma tu Contraseña" name="confirmpassword" required/>
                <input type="submit" className="oauthButton">
                    Continúa
                    <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="m6 17 5-5-5-5" />
                    <path d="m13 17 5-5-5-5" />
                    </svg>
                </input>
              </Form>
          </div>
        </main>
    )
}

