import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from './Pages/LoginPage'

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  )
}
