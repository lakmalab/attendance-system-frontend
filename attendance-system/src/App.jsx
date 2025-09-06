import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloLakmal from './hello'
import LoginPage from './pages/LoginPage'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

function App() {

  return (
  <AuthProvider>
    <Routes />
  </AuthProvider>
  )
}

export default App
