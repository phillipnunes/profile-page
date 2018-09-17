import React, { Component } from 'react'
import './styles.css'

export default class Header extends Component {
  state = {
    isActive: false
  }
  toggleBurgerMenu = () => {
    this.setState({ isActive: !this.state.isActive})
  }
  render() {
    const { isActive } = this.state
    return(
      <header className="header">
        <div className={`header__menu ${isActive ? 'is-active' : ''}`}>
          <ul className="header__menu-items">
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">my dashboard</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">jobs</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">companies</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">inside look</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">how it works</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="!#">for employers</a>
            </li>
          </ul>
        </div>
        <div onClick={this.toggleBurgerMenu} className={`header__burger-button ${isActive ? 'is-active' : ''}`}>
          <span className="header__burger-item"></span>
          <span className="header__burger-item"></span>
          <span className="header__burger-item"></span>
        </div>
      </header>
    )
  }
}
