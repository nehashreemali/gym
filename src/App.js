import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Exercises from './components/Exercises'
import './style.css'
const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1448px'}}} m='auto'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<Exercises/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
