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
  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]; // spreading out the state list into a new array
    persons.splice(personIndex, 1); // start at index, and splice away 1 element
    this.setState({persons: persons})
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonsHandler(index)}
            name={person.name} 
            age={person.age} 
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
        >
        Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;