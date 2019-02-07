import React, { Component } from 'react';
import List from './List';
import Decision from './Desicion'
import ListEntries from './ListEntries'

class App extends Component {

  state = {
    options: [
      'pizza', 
      'fish', 
      'steak', 
      'pancakes'
    ]};


generateChoices = () => {
    const NewOptionsList = this.state.options
      .map((optionsList) => <li>{optionsList}</li>)
    console.log(NewOptionsList)
    return NewOptionsList
    };

handleDesicion = () => {
    const options = this.state.options;
    const selection = options[Math.floor(Math.random()*options.length)]
    alert(selection)
    }

handleAddToList = (e) => {
  e.preventDefault();
  const options = this.state.options;
  const newItem = e.target.item.value;

  console.log(newItem)
  
  if(options.map((item) => item === newItem)){
    alert('Cant add multiples of the same item')
  } else {
  this.setState({
    options: [newItem, ...options]
  })}
  e.target.reset();
}

  render() {
    return (
      <div className="App">
        <h1>Be Decisive App</h1>
        <h3>Let me make a desicion for you!</h3>
        <ListEntries handleAddToList = {this.handleAddToList}/>
        <Decision handleDesicion = {this.handleDesicion} />
        <List options= {this.generateChoices()} />
      </div>
    );
  }
}

export default App;
