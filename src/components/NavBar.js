import { Component } from 'react';

import Logo from '../assets/images/logo.svg';
import Dollar from '../assets/images/dollar.svg';
import Cart from '../assets/images/cart.svg';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>ALL</li>
            <li>TECH</li>
            <li>CLOTHES</li>
          </ul>
        </nav>
        <div>
          <img src={Logo} alt="site logo" />
        </div>
        <div>
          <img src={Dollar} alt="site logo" />
          <img src={Cart} alt="site logo" />
        </div>
      </header>
    );
  }
}

export default NavBar;
