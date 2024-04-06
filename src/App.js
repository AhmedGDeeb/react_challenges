import './App.css';
import React, {Component, PropTypes} from 'react';

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

function App() {
  return (
    <Search />
  );
}

export default App;
