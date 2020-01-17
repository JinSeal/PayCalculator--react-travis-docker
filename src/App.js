import React, {Component} from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header'
import Table from './components/Table'
import Form from './components/Form'

class App extends Component {
  render(){
    return (
      <Container>
        <Header />
          <Form />
          <Table />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </Container>
    );
  }
}
export default App;
