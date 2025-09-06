import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloLakmal from './hello'
import LoginPage from './pages/LoginPage'
import { ThemeProvider } from '@material-tailwind/react'

function App() {

  return (
    <>
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 ">
      <LoginPage />
    </div>
    </>
  )
}

export default App
