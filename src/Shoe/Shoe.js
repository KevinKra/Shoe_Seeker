import React from "react";

class Shoe extends React.Component {
  render() {
    const { name, type, desc, image, shown, rating } = this.props.details;
    return (
      <li className="display-shoe">
        <h3>{name}</h3>
        <p>{rating}</p>
        <p>{type}</p>
        <img src={image} alt={name} />
        <p>{shown}</p>
        <p>{desc}</p>
        {/* Notice how arrow function had to be used, couldnt just insert prop */}
        <button onClick={() => this.props.addToOrder(this.props.index)}>
          Add to cart
        </button>
      </li>
    );
  }
}

export default Shoe;
