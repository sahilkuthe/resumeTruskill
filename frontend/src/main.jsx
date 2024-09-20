import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider, SignIn } from '@clerk/clerk-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SignUpPage from './auth/Signup.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/auth/signin',
    element: <SignUpPage />,
  },
  {
    path: '/auth/signup',
    element: <SignUpPage />,
  },
  
  { element: <App/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/>
    </ClerkProvider>

  </StrictMode>,
)
