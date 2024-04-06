import './App.css';
import React, {Component} from 'react';
// import {render} from 'react-dom';

/*
Any input that does not supply a value is an uncontrolled component, and the value of the render element will reflect the user's input

If you want to set up an initial value for an uncontrolled form component, use the detaultValue prop instead of value
*/
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "React"
    };
  }
  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }
  render() {
    // will not allow changes: value={this.state.searchTerm}
    // will allow changes (uncontrolled component): defaultValue={this.state.searchTerm} 
    // will allow changes (controlled component): value={this.state.searchTerm} onChange={this.handleChange.bind(this)}
    return (
      <div>
        Seach Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

class LoginForm extends Component {
  handleSubmit(event) {
    console.log("Submitted values are: ", 
      event.target.name.value,
      event.target.email.value
    );
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formGroup">
          <label name="name">Name:</label>
          <input name="name" type="text" />
        </div>

        <div className="formGroup">
          <label name="email">Name:</label>
          <input name="email" type="mail" />
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}
function App() {
  return (
    <LoginForm />
  );
}

export default App;
