import React from "react";
import "./_App.scss";
import Order from "../Order/Order";
import Form from "../Form/Form";

function App() {
  return (
    <main className="app">
      <section className="shoe-profile">
        <h1>Shoe Seeker</h1>
      </section>
      <aside>
        <Order />
        <Form />
      </aside>
    </main>
  );
}

export default App;
