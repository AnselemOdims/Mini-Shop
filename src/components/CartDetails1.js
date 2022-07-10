import { Component } from 'react';

class CartDetails1 extends Component {
  render() {
    const {
      brand, name, unitPrice, attributes, qty, currencySymbol, attr,
    } = this.props.data;

    return (
      <div>
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <p>
          {currencySymbol}
          {(unitPrice * qty).toFixed(2)}
        </p>
        <div className="attr__container">
          { attributes && attributes.map(((item) => (
            <>
              <p>
                {item.name.toUpperCase()}
                :
                {' '}
              </p>
              <div>
                {item.items.map(({ value }) => (
                  item.name === 'Color' ? (
                    <button
                      key={value}
                      type="button"
                      style={{ backgroundColor: value, border: attr[item.name] === value && '0.09rem #5ECE7B' }}
                      className="color__btn"
                      aria-label="product color"
                    />
                  ) : (
                    <button
                      type="button"
                      style={{ backgroundColor: attr[item.name] === value && '#1D1F22', color: attr[item.name] === value ? '#fff' : '#1D1F22' }}
                    >
                      {value}
                    </button>
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
