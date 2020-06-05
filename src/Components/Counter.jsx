import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';

import InputForm from './InputForm';

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      address: { street: 'Farfenugen Drive', number: 442 },
      people: [
        { name: 'Paul', age: 55, id: uuid() },
        { name: 'Sally', age: 26, id: uuid() },
        { name: 'Mike', age: 42, id: uuid() },
      ],
    };

    this.addNum = this.addNum.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  addPerson = (name, age) => {
    //console.log('Person: ' + name + ', ' + age);
    const newPerson = { name, age, id: uuid() };
    this.setState((prevState) => ({
      people: [...prevState.people, newPerson],
    }));
  };

  addNum = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  resetCounter = () => {
    this.setState({ counter: 0 });
  };
  styles = {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: '5px',
  };

  render() {
    const { counter } = this.state;
    const { street, number } = this.state.address;

    let countStyle = 'badge m-2 badge-';
    countStyle += this.state.counter >= 50 ? 'warning' : 'primary';

    return (
      <div>
        <h1>My Sandbox React App</h1>
        <p style={this.styles}>
          {number} {street}
        </p>
        <div>
          <h3>
            Here's a counter: <span className={countStyle}>{counter}</span>
          </h3>
          <button className='btn btn-secondary btn-sm' onClick={this.addNum}>
            Increment
          </button>
          <button className='btn btn-danger btn-sm' onClick={this.resetCounter}>
            Restart
          </button>
          <div>
            {counter > 50 ? <h4>BIG NUMBER</h4> : <h6>little number</h6>}
          </div>
          <hr />
          {this.state.people.length === 0 ? null : (
            <div>
              <ul>
                {this.state.people.map((person) => (
                  <li key={person.id}>
                    This is {person.name}, age: {person.age}.
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr />
          <InputForm addPerson={this.addPerson} />
        </div>
      </div>
    );
  }
}

export default Counter;
