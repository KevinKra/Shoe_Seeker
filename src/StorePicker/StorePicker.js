import React from "react";
import { getFunName } from "../utilities";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    this.props.history.push(`store/${this.myInput.current.value}`);
  };
  render() {
    return (
      <form onSubmit={this.goToStore}>
        <h1>Welcome</h1>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter store here"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
