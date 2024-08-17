import React from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

function Header() {
  let location = useLocation().pathname
  console.log(location)
  return (
    <div className="Header">
      <nav className="nav">
        <Link className='logo'>
          <img src={logo} alt="" />  
        </Link> 
        <ul className="nav__list">
          <li className={location == '/' ? "nav__item active" : "nav__item"}>
            <Link to='/' className='item__link'>
              <i className="bi bi-house"></i>
            </Link>
          </li>
          <li className={location == '/percent' ? "nav__item active" : "nav__item"}>
            <Link to='/percent' className='item__link'>
            <i className="bi bi-percent"></i>
            </Link>
          </li>
          <li className={location == '/chart' ? "nav__item active" : "nav__item"}>
            <Link to='/chart' className='item__link'>
              <i className="bi bi-pie-chart"></i>
            </Link>
          </li>
          <li className={location == '/email' ? "nav__item active" : "nav__item"}>
            <Link to='/email' className='item__link'>
              <i className="bi bi-envelope"></i>
            </Link>
          </li>
          <li className={location == '/notification' ? "nav__item active" : "nav__item"}>
            <Link to='/notification' className='item__link'>
              <i className="bi bi-bell"></i>
            </Link>
          </li>
          <li className={location == '/setting' ? "nav__item active" : "nav__item"}>
            <Link to='/setting' className='item__link'>
              <i className="bi bi-gear"></i>
            </Link>
          </li>
          <li className={location == '/logout' ? "nav__item active" : "nav__item"}>
            <Link to='/logout' className='item__link'>
              <i className="bi bi-box-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header