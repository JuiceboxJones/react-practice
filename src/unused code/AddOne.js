import React, { Component } from 'react';


class AddOne extends Component {
    state = {
        count: null,
    }

    handleAddOne = () => {
        const plusOne = this.state.count + 1;
        this.setState({count: plusOne})
        console.log(this.state)
    }

    handleMinusOne = () => {
        const minusOne = this.state.count -1;
        
        if(this.state.count < 1){
            this.setState({count:'Cant have less than 0'})
        } else if(this.state.count > 1){
            this.setState({count: minusOne})
        } else{
            this.setState({count: 0})
        }
    }

  render() {
    return (
        <div className="addOne">
        <h1>Add One App</h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.handleAddOne()}>+1</button>
        <button onClick={() => this.handleMinusOne()}>-1</button>
        </div>
    )
  }
}

export default AddOne;