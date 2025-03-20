// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Red from "./components/Red"
import Blue from './components/Blue'
import Home from './components/Home'
import Nav from "./components/Nav"
import Green from "./components/Green"
import Mystery from "./components/Mystery"

function App() {

  return (
    <>
      <div id="container">
      <Nav />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
          <Route path="/green" element={<Green />}/>
          <Route path="/mystery" element={<Mystery />}/>
        </Routes>
      </div>


    </div>
    </>
  )
}

export default App
