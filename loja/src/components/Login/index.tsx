import { TextField } from "@mui/material";
import React from "react";
import { Button, Container } from "./style";

export const Login = () => {
  return (
    <Container>
      <h3>Login</h3>
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
    </Container>
  );
};
