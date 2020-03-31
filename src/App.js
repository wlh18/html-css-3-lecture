import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>HTML CSS 3 LECTURE</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="boxes-hold">
          <div className="box red-box"></div>
          <div className="box green-box"></div>
          <div className="box blue-box"></div>
        </div>
      </main>
    </div>
  )
}

export default App
