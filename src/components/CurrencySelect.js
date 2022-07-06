import { Component } from 'react';
import { connect } from 'react-redux';

import { CURRENCY_QUERY } from '../Utils/queries';
import sendRequests from '../Utils/utils';
import { changeCurrency } from '../redux/cart/actions/cartAction';

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

    return (
      <ul>
        {data && data.map(({ label, symbol }) => (
          <li key={label} onClick={() => this.handleChangeCurrency(label, symbol)}>
            {symbol}
            {' '}
            {label}
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(null, { changeCurrency })(CurrencySelect);
