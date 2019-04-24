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
      </li>
    );
  }
}

export default Shoe;
