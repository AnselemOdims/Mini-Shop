/* eslint-disable consistent-return */
import { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../assets/images/logo.svg';
import Dollar from '../assets/images/dollar.svg';
import Cart from '../assets/images/cart.svg';
import Dropdown from './Dropdown';
import rotate from '../assets/styles/animation';
import CurrencySelect from './CurrencySelect';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 6.3125rem 0;
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

      img {
        cursor: pointer;
      }

      div {
        position: relative;
        cursor: pointer;

        span {
          position: absolute;
          bottom: 12px;
          right: -8px;
          font-size: 12px;
          font-weight: 550;
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
          background: black;
          text-align: center;
          color: #fff;
        }
      }
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
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showCurrencyChanger: false,
    };
  }

  handleDropdownToggle = () => {
    const { showDropdown } = this.state;
    this.setState({
      showDropdown: !showDropdown,
      showCurrencyChanger: false,
    });
  }

  handleCurrencyToggle = () => {
    const { showCurrencyChanger } = this.state;
    this.setState({
      showCurrencyChanger: !showCurrencyChanger,
      showDropdown: false,
    });
  }

  render() {
    const { showDropdown, showCurrencyChanger } = this.state;
    const { cart } = this.props;

    const getQty = () => (
      (cart.length > 0 && cart.length === 1) ? cart[0]?.qty : cart.reduce((a, b) => a + b?.qty, 0));

    return (
      <div>
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
                  fontWeight: isActive && '600',
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
            <img src={Dollar} alt="site logo" onClick={this.handleCurrencyToggle} />
            <div onClick={this.handleDropdownToggle}>
              <img src={Cart} alt="site logo" />
              <span>{getQty() || 0}</span>
            </div>
          </div>
        </Header>
        <Dropdown show={showDropdown} handleToggle={this.handleDropdownToggle} cartQty={getQty()} />
        <CurrencySelect handleToggle={this.handleCurrencyToggle} show={showCurrencyChanger} />
      </div>
    );
  }
}

export default connect((({ cartReducer }) => ({ cart: cartReducer.cart })))(NavBar);
