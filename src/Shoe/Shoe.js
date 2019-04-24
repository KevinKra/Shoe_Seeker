import React from "react";

class Shoe extends React.Component {
  render() {
    const { name, type, desc, image, shown, rating } = this.props.shoes;
    return (
      <article>
        <h1>Shoe Seeker</h1>
        {this.props.shoes.shoe1 ? (
          <p>{this.props.shoes.shoe1.name}</p>
        ) : (
          <p>{this.props.shoes.name}</p>
        )}
        <p>{this.props.shoes.name}</p>
        <img src={this.props.shoes.image} alt="" />
      </article>
    );
  }
}

export default Shoe;
