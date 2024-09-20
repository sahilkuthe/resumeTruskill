import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { useUser } from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'

function App() {
  const {isLoaded, isSignedIn} = useUser();
  if(!isSignedIn&&isLoaded)
    {
      return <Navigate to={'/auth/sign-in'} />
    }
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
