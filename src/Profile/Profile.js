import React from "react";
import Shoe from "../Shoe/Shoe";

class Profile extends React.Component {
  render() {
    return (
      <section className="shoe-profile">
        <Shoe shoes={this.props.shoes} />
      </section>
    );
  }
}

export default Profile;
