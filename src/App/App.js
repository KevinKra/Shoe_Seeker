import React from "react";
import "./_App.scss";
import Order from "../Order/Order";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";
import sampleShoes from "../sample-shoes";
import base from "../base";

class App extends React.Component {
  state = {
    shoes: {},
    order: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/shoes`, {
      context: this,
      state: "shoes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    console.log("awooo");
    base.removeBinding(this.ref);
  }

  displayDefaultShoes = e => {
    e.preventDefault();
    this.setState({ shoes: sampleShoes });
  };

  updateShoes = newShoe => {
    //takes the old shoes and spreads it
    const shoes = { ...this.state.shoes };
    //adds a new shoe w/ key
    shoes[`shoe${Date.now()}`] = newShoe;
    //updates the state
    this.setState({ shoes: shoes });
  };

  addToOrder = key => {
    //1. Copy state
    const order = { ...this.state.order };
    //2. add to order or update number
    order[key] = order[key] + 1 || 1;
    //3. call set state
    this.setState({ order: order });
  };

  render() {
    return (
      <main className="app">
        <Profile shoes={this.state.shoes} addToOrder={this.addToOrder} />
        <aside>
          <Order shoes={this.state.shoes} order={this.state.order} />
          <Form
            displayDefaultShoes={this.displayDefaultShoes}
            updateShoes={this.updateShoes}
            shoes={this.state.shoes}
          />
        </aside>
      </main>
    );
  }
}

export default App;
