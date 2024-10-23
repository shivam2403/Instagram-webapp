import { Button } from "@chakra-ui/react"
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayouts from "./Layouts/PageLayout/PageLayouts"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import useAuthStore from "./store/authStore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"
import ForgotPassword from "./components/AuthForm/ForgotPassword"

function App() {
  const [user]=useAuthState(auth);

  return (
    <BrowserRouter>
    <PageLayouts>
        <Routes>
          <Route path="/" element={user ? <HomePage/> : <Navigate to='/auth'/>}/>
          <Route path="/auth" element={!user ? <AuthPage/> : <Navigate to='/'/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/:username" element={<ProfilePage/>}/>
        </Routes>
    </PageLayouts>
      </BrowserRouter>
  )
}

export default App
