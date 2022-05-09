import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "./style";

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    if(username === "admin" && password === "admin") {
      window.location.href = "/produto"
    }else {
      alert("Usuario ou senha incorretos")
    }
  }

  return (
    <Container>
      <Link className="link" to="/produto">Acessar Produtos</Link>
        <TextField
          id="outlined-text-input"
          label="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          sx={{background: "#1976d21a" , borderRadius: ".5rem"}}

        />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{background: "#1976d21a" , borderRadius: ".5rem"}}
        />

      <Button onClick={ handleLogin } >Entrar</Button>

        <div className="register">
          <span>Ainda não se cadastrou? <a href="/">Registre-se</a> </span>
        </div>

    </Container>
  );
};
