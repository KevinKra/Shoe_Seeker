import React from "react";
import "./_App.scss";
import Order from "../Order/Order";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";
import shoes from "../sample-shoes";

class App extends React.Component {
  state = {
    shoes: {},
    order: {}
  };

  displayDefaultShoes = e => {
    e.preventDefault();
    this.setState({ shoes: shoes });
    console.log("hello");
  };

  updateShoes = newShoe => {
    //takes the old shoes and spreads it
    const shoes = { ...this.state.shoes };
    //adds a new shoe w/ key
    shoes[`shoe${Date.now()}`] = newShoe;
    //updates the state
    this.setState({ shoes: shoes });
  };

  render() {
    return (
      <main className="app">
        <Profile shoes={this.state.shoes} />
        <aside>
          <Order />
          <Form
            displayDefaultShoes={this.displayDefaultShoes}
            updateShoes={this.updateShoes}
          />
        </aside>
      </main>
    );
  }
}

export default App;
