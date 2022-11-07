import React, { Component } from 'react';
import  { NavLink  } from 'react-router-dom';
import './Menu.scss';
import logo from '../../assets/svg/logo.svg';
import iconOpen from '../../assets/svg/icon-hamburger.svg';
import iconClose from '../../assets/svg/icon-close.svg';

class Menu extends Component{

  handleOpen = () => {
    let menu = document.querySelector('.menu-items-wrapper');
    let openButton = document.querySelector('.open-menu');
    openButton.classList.add('menu-active');
    menu.classList.add('menu-active');
    console.log('open');
  };

  handleClose = () => {
    let menu = document.querySelector('.menu-items-wrapper');
    let openButton = document.querySelector('.open-menu');
    openButton.classList.remove('menu-active');
    menu.classList.remove('menu-active');
    console.log('close');
  };

  render() {
    return (
      <div className='menu-wrapper nav-text'>
          <img className='logo' src={logo} alt="Space Tourism logo"/>
          <img className='open-menu' src={iconOpen} alt="Open icon" onClick={this.handleOpen}/>
          <div className="menu-items-wrapper">
            <div className='close-menu'>
              <img className='close-icon' src={iconClose} alt="Close icon" onClick={this.handleClose}/>
            </div>
              <nav>
                <ul className='menu-items barlow-condensed'>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-path' : ''}  to="/" end>
                      <span>00</span> Home
                  </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-path' : ''} to="/destination" >
                      <p><span>01</span> Destination</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-path' : ''} to="/crew" >
                      <p><span>02</span> Crew</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? 'active-path' : ''} to="/technology" >
                      <p><span>03</span> Technology</p>
                    </NavLink>
                  </li>
                </ul>
              </nav>
          </div>
      </div>
    );
  }
}

export default Menu;