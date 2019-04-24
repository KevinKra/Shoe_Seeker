import React from "react";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const shoe = this.props.shoes[key];
      const count = this.props.order[key];
      if (shoe) {
        return prevTotal + count * shoe.price;
      }
      return prevTotal;
    }, 0);
    return (
      <section className="order-information">
        <ul>
          {orderIds.map(key => {
            return <li key={key}>{key}</li>;
          })}
        </ul>
        <div>Total: {total}</div>
      </section>
    );
  }
}

export default Order;
