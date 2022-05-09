import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from './Pages/LoginPage'
import { ProductPage } from './Pages/ProductPage';
// Pedir ajuda a respeito do tsx nesse componente, pois com o tipo any no item e signed sendo bolleando, não é possivel fazer o operador ternario no return.
const Private = ({ Item }) => {
  const logado = true;

  return logado > 0 ? <Item /> : <LoginPage />;
}

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/produto" element={<Private Item={ProductPage} />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  )
}
