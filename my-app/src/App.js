import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Navbar from "./Components/Navbar"
import About from "./pages/about"
import Home from "./pages/index"
import Settings from "./pages/settings"

// npm start
// localhost:3000
// ctrl c

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <TransitionGroup>
        <CSSTransition className="fade" timeout={300}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  )
}

export default App
