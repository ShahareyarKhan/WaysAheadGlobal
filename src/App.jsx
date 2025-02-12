import React from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import UseCases from './Components/UseCases'
import AuthenticationPage from './Components/AuthenticationPage'
import About from './Components/About'
import { Routes, Route } from "react-router-dom";
import Carrers from './Components/Carrers'
import AddJobs from './Components/AddJobs'
const App = () => {
  return (
    <div className=''>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth-login-signup" element={<AuthenticationPage/>} />
        <Route path="/careers" element={<Carrers/>} />
        <Route path="/careers/add-jobs" element={<AddJobs/>} />
      </Routes>
      
    </div>
  )
}

export default App
