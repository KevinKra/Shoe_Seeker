import React from "react";

class Form extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  ratingRef = React.createRef();

  renderShoe = e => {
    e.preventDefault();
    const shoe = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
      rating: parseFloat(this.ratingRef.current.value)
    };
    this.props.updateShoes(shoe);
    e.currentTarget.reset();
  };

  render() {
    return (
      <section className="form">
        <form className="shoe-edit" onSubmit={this.renderShoe}>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="name"
          />
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="price"
          />
          <textarea name="desc" ref={this.descRef} placeholder="desc" />
          <input
            name="image"
            ref={this.imageRef}
            type="text"
            placeholder="image"
          />
          <input
            name="rating"
            ref={this.ratingRef}
            type="text"
            placeholder="rating"
          />
          <button type="submit">Display Shoes</button>
        </form>
      </section>
    );
  }
}

export default Form;
