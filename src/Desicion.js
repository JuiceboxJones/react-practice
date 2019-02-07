import React, { Component } from 'react';



class Desicion extends Component {
    
  render() {
    return (
      <div className="desicion">
        <button onClick={this.props.handleDesicion}>What should I do?</button>
      </div>
    );
  }
}

export default Desicion;