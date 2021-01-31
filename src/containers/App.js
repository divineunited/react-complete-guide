import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'addfsdgwe', name: "Maximus", age: 28},
        { id: 'dfsdg3523', name: "Manu", age: 29},
        { id: 'er23423dg', name: "Stephanie", age: 26},
      ],
      showPersons: false
    }
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]; // spreading out the state list into a new array
    persons.splice(personIndex, 1); // start at index, and splice away 1 element
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]}; // spread operator so we don't mutate original
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
    
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    )
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangedHandler}
          />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;