import React from "react";
import Shoe from "../Shoe/Shoe";

class Profile extends React.Component {
  render() {
    return (
      <section className="shoe-profile">
        <ul className="shoes">
          {Object.keys(this.props.shoes).map(key => {
            return <Shoe key={key} details={this.props.shoes[key]} />;
          })}
        </ul>
      </section>
    );
  }
}

export default Profile;
