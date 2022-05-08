import { TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "./style";

export const Login = () => {
  return (
    <Container>
      <Link className="link" to="/produto">Acessar Produtos</Link>
        <TextField
          id="outlined-text-input"
          label="Username"
          type="text"
          sx={{background: "#1976d21a" , borderRadius: ".5rem"}}

        />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          sx={{background: "#1976d21a" , borderRadius: ".5rem"}}
        />

      <Button>Entrar</Button>

        <div className="register">
          <span>Ainda não se cadastrou? <a href="/">Registre-se</a> </span>
        </div>

    </Container>
  );
};
