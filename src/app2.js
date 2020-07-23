import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    persons: [
      { name: 'dan', age: 34 },
      { name: 'ben', age: 22 },
    ],
    showPersons: false,
  };
  toggleHandler = () => {
    let temp = this.state.showPersons;
    this.setState({ showPersons: !temp });
  };
  render() {
    // let persons = null
    // if (this.state.showPersons === true) {
    //   persons = (
    // <div>
    //   <Person
    //     name={this.state.persons[0].name}
    //     age={this.state.persons[0].age}
    //   />
    //   <Person
    //     name={this.state.persons[1].name}
    //     age={this.state.persons[1].age}
    //   />
    // </div>
    //   )
    // }
    return (
      <div className='App'>
        <h1>Persons:</h1>
        <button onClick={this.toggleHandler}>Show/Hide</button>
        {this.state.showPersons && (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
          </div>
        )}
      </div>
    );
  }
}
const Person = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
    </div>
  );
};
// const Person2 = (props) => {
//   return (
//     <div>
//       <h2>Name: {props.data.name}</h2>
//       <h4>Age: {props.data.age}</h4>
//     </div>
//   )
// }
export default App;
