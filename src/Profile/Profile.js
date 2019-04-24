import React from "react";
import Shoe from "../Shoe/Shoe";

class Profile extends React.Component {
  render() {
    return (
      <section className="shoe-profile">
        <ul className="shoes">
          {/*Very neat*/}
          {Object.keys(this.props.shoes).map(key => {
            return (
              <Shoe
                key={key}
                index={key}
                details={this.props.shoes[key]}
                addToOrder={this.props.addToOrder}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Profile;
