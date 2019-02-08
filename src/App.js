import React, { Component } from 'react';
import './app.css';
import List from './List';
import Decision from './Desicion';
import ListEntries from './ListEntries';


class App extends Component {

  state = {
    options: []
  };

handleDelete = (e, optionsList) => {
const options = this.state.options
const toBeDeleted = (e.currentTarget, optionsList)
const arrIndex = options.indexOf(toBeDeleted)
options.splice(arrIndex, 1)
this.setState({
  options: options
  
})
}


generateChoices = () => {
    const NewOptionsList = this.state.options
      .map((optionsList) => <li>{optionsList}
      <button onClick={e => this.handleDelete(e, optionsList)}>Delete</button>
      </li>)
    console.log(NewOptionsList)
    return NewOptionsList
    };

handleClearList = () => {
  this.setState({
    options: []
  })

}

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
  
  /*
    options=[{name:"pizza",cost:5.00},{name:"hot dog",cost:1.99}]
    let filteredOptions = options.filter(option=>option.name!==query);
    if(filteredOptions.length !== options.length){
      // already exists
    }

  */

  if(newItem === ''){
    this.setState({
      options: options
    })
  } else if(options.indexOf(newItem)<0){ // ["red","green","blue"] .indexOf('red') -> 0, .indexOf('green)->1, .indexOf('purple')->-1

    this.setState({
      options: [newItem, ...options]
    })
    e.target.reset();

  } else {
    alert('already exists');
    e.target.item.focus();
  }
}

  render() {
    return (
      <div className="App">
        <h1>Be Decisive App</h1>
        <h3>Let me make a desicion for you!</h3>
        <Decision handleDesicion = {this.handleDesicion} />
        <ListEntries handleAddToList = {this.handleAddToList} />
        <List 
        handleClearList= {this.handleClearList}
        options= {this.generateChoices()} />
      </div>
    );
  }
}

export default App;
