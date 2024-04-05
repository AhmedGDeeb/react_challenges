import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

var place = "World"
function App() {
  return (
    // 0. default
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    //*/

    // 1. Hello World
    /*
    <h1>Hello {place}</h1>
    //*/
    
    // 2. Grocery
    <ul>
      <ListItem quantity="1" name="Bread" />
      <ListItem quantity="6" name="Eggs" />
      <ListItem quantity="2" name="Milk" />
    </ul>
  );
}

class ListItem extends Component {
  render() {
    return (
      <li>P{this.props.quantity}x{this.props.name}</li>
    )
  }
}

export default App;
