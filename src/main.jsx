import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Component } from 'react';
import CharacterCounter from './components/CharacterCounter.jsx';
import AddNumComponent from './components/AddNumComponent.jsx';
import CharCounterComponent from './components/CharCounterComponent.jsx';
import ClickCounterComponent from './components/ClickCounterComponent.jsx';
import { BrowserRouter } from 'react-router-dom';

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

const root = createRoot(document.getElementById('root'));

// let element = <h1>Hello World!</h1>

// Using plain JS
/* element = React.createElement(
  "div",
  { class: "hello" },
  React.createElement("h1", null, "Hello World 1!"),
  React.createElement("h2", null, "Hello World 2!"),
); */

// Using JSX (template engine)
/* const name = "James Bond";

function getName(name) {
  return name;
}

element = (
  <div className="hello">
    <h1>Hello World!</h1>
    <h2>Hello World! {name}</h2>
    <h3>Hello World! {getName(name)}</h3>
    <h3>{2 * 2}</h3>
  </div>
); */

/* function DisplayEmployee(employee) {
  return (
    <div>
      <p>
        <label>Employee Id: <b>{employee.Id}</b></label>
      </p>
      <p>
        <label>Employee First Name: <b>{employee.firstName}</b></label>
      </p>
      <p>
        <label>Employee Last Name: <b>{employee.lastName}</b></label>
      </p>
      <p>
        <label>Employee Age: <b>{employee.age}</b></label>
      </p>
    </div>
  );
}

const Employee = (employee) => {
  return (
    <div>
      <h2>Employee Profile</h2>

      <p>
        <label>Employee Id: <b>{employee.Id}</b></label>
      </p>
      <p>
        <label>Employee First Name: <b>{employee.firstName}</b></label>
      </p>
      <p>
        <label>Employee Last Name: <b>{employee.lastName}</b></label>
      </p>
      <p>
        <label>Employee Age: <b>{employee.age}</b></label>
      </p>

      <Department Id={employee.departmentId} name={employee.departmentName} />
    </div>
  );
};

const Department = (department) => {
  return (
    <div>
      <h2>Department Information</h2>

      <p>
        <label>Department Id: {department.Id}</label>
      </p>

      <p>
        <label>Department Name: {department.name}</label>
      </p>
    </div>
  );
}; */

// element = <DisplayEmployee Id="007" firstName="John" lastName="Doe" age="25" />

// element = <Employee Id="005" firstName="Wendy" lastName="Ybanez" age="25" departmentId="1" departmentName="HR" />

// Class Component
/* class Emp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Employee Profile</h2>

        <p>
          <label>Employee Id: <b>{this.props.Id}</b></label>
        </p>
        <p>
          <label>Employee First Name: <b>{this.props.firstName}</b></label>
        </p>
        <p>
          <label>Employee Last Name: <b>{this.props.lastName}</b></label>
        </p>
        <p>
          <label>Employee Age: <b>{this.props.age}</b></label>
        </p>

        <Dept Id={this.props.departmentId} name={this.props.departmentName} />
      </div>
    )
  }
}

class Dept extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Department Information</h2>

        <p>
          <label>Department Id: {this.props.Id}</label>
        </p>

        <p>
          <label>Department Name: {this.props.name}</label>
        </p>
      </div>
    )
  }

}

element = <Emp Id="008" firstName="Vince" lastName="Ybanez" age="25" departmentId="3" departmentName="HR" /> */

// State Management - ClickCounter Component
/* class ClickCounter extends Component {

  state = { clickCount: 0, message: "" };

  constructor(props) {
    super(props);
  }

  onClickButton = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    return (
      <div>
        <h1>Click Counter </h1>
        <p>
          <label>
            The button was clicked {this.state.clickCount}
          </label>
        </p>

        <button onClick={this.onClickButton}>Click</button>
      </div>
    );
  }

} */

// element = <ClickCounter />

// State Management - AddNumberComponent
/* class AddNumberComponent extends Component {

  state = {
    sum: 0,
    firstNumber: 0,
    secondNumber: 0
  };

  constructor(props) {
    super(props);
  }

  onInputChangeFirstNumber = (e) => {
    let value = e.target.value;

    this.setState({ firstNumber: value });
  }

  onInputChangeSecondNumber = (e) => {
    let value = e.target.value;

    this.setState({ secondNumber: value });
  }

  onInputChange = (e) => {
    let value = e.target.value;

    this.setState({ [e.target.name]: value });
  }

  calculate = () => {
    let total = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);

    this.setState({ sum: total });
  }

  render() {
    return (
      <div>
        <h2>Add Number</h2>

        <p>
          <label>First Number</label>
          <input type="number" name="firstNumber" onChange={this.onInputChange} />
        </p>

        <p>
          <label>Second Number</label>
          <input type="number" name="secondNumber" onChange={this.onInputChange} />
        </p>

        <p>
          <button onClick={this.calculate}>Calculate</button>
        </p>

        <p>The sum is {this.state.sum}</p>
      </div>
    );
  }

}

element = <AddNumberComponent /> */

// State Management - CharacterCunter
/* element = <CharacterCounter />


element = <AddNumComponent />

element= <CharCounterComponent /> */

/* element = (
  <StrictMode>
    <App />
  </StrictMode>
); */

// element = (<ClickCounterComponent />);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
