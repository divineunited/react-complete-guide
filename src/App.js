import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Maximus", age: 28},
        { name: "Manu", age: 29},
        { name: "Stephanie", age: 26},
      ],
      showPersons: false
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
        { name: newName, age: 28},
        { name: "Manu", age: 29},
        { name: "Stephanie", age: 27},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Maximus", age: 28},
        { name: event.target.value, age: 29},
        { name: "Stephanie", age: 26},
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
        >
        Show Persons
        </button>
        {
          this.state.showPersons ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}  
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler}
              >
                My Hobbies: Racing
              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
              />
            </div> : null
        }
      </div>
    );
  }
}

export default App;