import { TextField } from "@mui/material";
import React from "react";
import { Button, Container } from "./style";

export const Login = () => {
  return (
    <Container>
      <h4>Login</h4>
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
        <div className="register">
          <span>Ainda não se cadastrou? <a href="/">Registre-se</a> </span>
        </div>

      <Button>Entrar</Button>


    </Container>
  );
};
