import React from "react";

class Form extends React.Component {
  render() {
    return (
      <section className="form">
        <form>
          <input name="name" type="text" placeholder="name" />
          <input name="price" type="text" placeholder="price" />
          <textarea name="desc" placeholder="desc" />
          <input name="image" type="text" placeholder="image" />
        </form>
      </section>
    );
  }
}

export default Form;
