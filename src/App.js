import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // uses Radium to allow CSS pseudoselector inline
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id} 
            click={() => this.deletePersonsHandler(index)} 
            name={person.name} 
            age={person.age} 
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [] // CSS class names from app.css
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi! I'm a react app!</h1>
          <p className={classes.join(' ')}>How many persons do I have left?</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}
          >
          Show Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);