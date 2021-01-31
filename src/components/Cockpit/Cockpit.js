import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [] // CSS class names from app.css
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi! I'm a react app!</h1>
            <p className={assignedClasses.join(' ')}>How many persons do I have left?</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Show Persons
            </button>
        </div>
    )
};

export default cockpit;