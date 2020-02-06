import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Form />
        <Table />
      </Container>
    );
  }
}
export default App;
