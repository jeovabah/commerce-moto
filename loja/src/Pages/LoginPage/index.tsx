import React from 'react'
import { Login } from '../../components/Login'
import { Container } from './style'



export const LoginPage = () => {
  return (
    <Container>
      <div className="content">
      <Login />
        <img src="https://me2.com.br/wp-content/uploads/2022/04/cropped-logo-branca-1024x292.png" alt="img" />
      </div>
    </Container>
  )
}
