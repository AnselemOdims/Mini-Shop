import { Component } from 'react';

class CartDetails1 extends Component {
  render() {
    const {
      brand, name, prices, attributes,
    } = this.props?.data;

    return (
      <div>
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <p>
          $
          {prices?.[0].amount}
        </p>
        <div className="attr__container">
          {attributes.map(((attr) => (
            <>
              <p>
                {attr.name.toUpperCase()}
                :
                {' '}
              </p>
              <div>
                {attr.items.map(({ value }) => (
                  attr.name === 'Color' ? (
                    <button
                      key={value}
                      type="button"
                      style={{ backgroundColor: value }}
                      className="color__btn"
                      aria-label="product color"
                    />
                  ) : (
                    <button type="button">{value}</button>
                  )
                ))}
              </div>
            </>
          )))}
        </div>
      </div>
    );
  }
}

export default CartDetails1;
