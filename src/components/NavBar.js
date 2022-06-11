import { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/logo.svg';
import Dollar from '../assets/images/dollar.svg';
import Cart from '../assets/images/cart.svg';
import { rotate } from '../assets/styles/animation';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 7.2143rem 0;
  align-items: flex-start;
  background: var(--white);
  box-shadow: var(--shadow-1);

  > nav {
        display: flex;

        .links {
          color: var(--text-color-1);
          padding: 0 1rem 2rem;
          font-size: 1rem;
          line-height: 120%;
          font-weight: 400;
        }
  }

  > div {

    &:nth-of-type(1) {
      img {
        animation: ${rotate} 2s linear;
      }
    }

    &:nth-of-type(2) {
      display: flex;
      align-items: center;
      gap: 2.375rem;
    }
  }
`;

const links = [
  {
    id: 1,
    path: '/',
    text: 'ALL',
  },
  {
    id: 2,
    path: '/tech',
    text: 'TECH',
  },
  {
    id: 3,
    path: '/clothes',
    text: 'CLOTHES',
  },
];

class NavBar extends Component {
  render() {
    return (
      <Header>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="links"
              style={({ isActive }) => ({
                color: isActive && '#5ECE7B',
                borderBottom: isActive && 'solid 2px var(--primary-color)',
                fontWeight: isActive && '600'
              })}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div>
          <img src={Logo} alt="site logo" />
        </div>
        <div>
          <img src={Dollar} alt="site logo" />
          <img src={Cart} alt="site logo" />
        </div>
      </Header>
    );
  }
}

export default NavBar;
