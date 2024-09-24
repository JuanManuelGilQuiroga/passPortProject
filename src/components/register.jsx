import React from "react";
import { Form, useNavigate } from "react-router-dom";
import "../register.css";

export const registerAction = async ({ request }) => {
  let data = Object.fromEntries(await request.formData());
  let res = await fetch('http://localhost:3000/auth/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const user = await res.json();
    return user;
  } else {
    const errorData = await res.json();
    throw new Error(errorData.message); // Lanza el error si el registro falla
  }
};

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await registerAction({ request: { formData: () => formData } });

    if (res) {
      navigate('/profile');
    } else {
      console.error('Error al registrar el usuario');
    }
  };

  return (
    <main>
      <div className="form">
        <p>Regístrate para continuar,<span>Completa el formulario</span></p>
        <Form className="formregister" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nick" name="nick" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Contraseña" name="password" required />
          <div className="separator"><div/></div>
          <input type="submit" className="oauthButton" value="Continúa" />
        </Form>
      </div>
    </main>
  );
}
