
import './App.css'
import Navbar from './globals/components/navbar/Navbar'
import Footer from './globals/components/footer/Footer'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import Home from './pages/home/Home'
import Report from './pages/user/Report'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewReport from './pages/user/ViewReport'
import AboutUs from './pages/user/AboutUs'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report/*" element={<Report />} />
          <Route path="/ViewReport" element={<ViewReport />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </>
  )
}

export default App
