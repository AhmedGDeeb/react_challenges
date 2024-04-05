import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// data
let cardList = [
  {
      id: 1,
      title: "Read the Book",
      description: "I should read the **whole** book",
      color : '#BD8D31',
      status: "in-progress",
      tasks: []
    },
    {
      id: 2,
      title: "Write some code",
      description: "Code along with the samples in the book. The compelete source can be found at [github](https://github.com/pro-react)",
      color : '#3A7E28',
      status: "todo",
      tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
      ]
  },
];

// Checklist Component
class Checklist extends Component {
  render() {
    console.log("Enetered Checklist");
    let tasks = this.props.tasks.map((task) => (
        <li key={task.id} className="checklist_task">
          <input type="checkbox" defaultChecked={task.done} />
          {task.name}
          <a href="#" className="check_list--remove" />
        </li>
      ));

      return (
        <div className='checllist'>
          <ul>{tasks}</ul>
          <input type='text' className='checklist--add-task' placeholder='Type then hit Enter to add a task' />
          
        </div>
      )
  }
}

// card component
class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  }
  toggleDetails(){
    this.setState({showDetails: !this.state.showDetails});
  }
  render() {
    console.log("Enetered Card");
    let cardDetails;
    if(this.state.showDetails){
      cardDetails = (
        <div cassName = 'card_details'>
          {
            this.props.description

          }
          <Checklist cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    };
    let color = {
      backgroundColor: this.props.color
    }
    return (
      <div className="card">
        <div className='sideColor' style={color}/>
        <div className={
          this.state.showDetails? "card_title card_title--is-open" : "card_title"
        } 
        onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    )
  }
}

var cards =  cardList.map((card) => {
  return <Card  key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                color={card.color}
                tasks={card.tasks}
                status={card.status}
                />
});
// List componenet
class List extends Component{
  render() {
    console.log("Enetered List", this.props.cards);
    return (
      <div className='list'>
        <h1>{this.props.title}</h1>
        {this.props.cards}
      </div>
    );
  }
}

// KanbanBaord
class KanbanBoard extends Component {
  render() {
    console.log("Enetered KanbanBoard");
    return(
      <div className='app'>
        <List id = 'todo' title="To Do" cards = {
          cards.filter((card) => card.props.status === "todo")
        } />
        
        <List id = 'in-progress' title="In Progress" cards = {
          cards.filter((card) => card.props.status === "in-progress")
        } />

        <List id = 'done' title="Done" cards = {
          cards.filter((card) => card.props.status === "done")
        } />
      </div>
    )
  }
}

function App() {
  return (
    <KanbanBoard />
  );
}



export default App;
