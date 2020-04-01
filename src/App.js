import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mobileMenuOpen: false,
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  render() {
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
            <img
              onClick={this.toggleMobileMenu}
              className="hamburger"
              src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
            />
            <ul
              className={`mobile-nav-list ${
                this.state.mobileMenuOpen ? 'mobile-nav-list-open' : null
              }`}
            >
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
}

export default App
