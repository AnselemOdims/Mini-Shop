import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { CURRENCY_QUERY } from '../Utils/queries';
import sendRequests from '../Utils/utils';
import { changeCurrency } from '../redux/cart/actions/cartAction';

const CurrencyList = styled.ul`
  position: fixed;
  top: 5.1rem;
  right: 6%;
  width: fit-content;
  z-index: 10;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: #fff;

  li {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
    padding: 8px 38px 8px 20px;

    &:hover {
      background: #EEEEEE;
      cursor: pointer;
    }
  }
`;

class CurrencySelect extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const res = await sendRequests(CURRENCY_QUERY);
    this.setState({ data: res.data.currencies });
  }

  handleChangeCurrency = (label, symbol) => {
    this.props.changeCurrency({ label, symbol });
  }

  render() {
    const { data } = this.state;
    const { show } = this.props;

    return (
      <CSSTransition in={show} timeout={500} classNames="drop-node" unmountOnExit>
        <CurrencyList>
          {data && data.map(({ label, symbol }) => (
            <li key={label} onClick={() => this.handleChangeCurrency(label, symbol)}>
              {symbol}
              {' '}
              {label}
            </li>
          ))}
        </CurrencyList>
      </CSSTransition>
    );
  }
}

export default connect(null, { changeCurrency })(CurrencySelect);
