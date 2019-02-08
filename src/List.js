import React, { Component } from 'react';

/*

export default function List(props){
  return (
    <div className="Options">
        <ul>
        {props.options}
        </ul>
        <button onClick={props.handleClearList}>Clear List</button>
      </div>
  )
}

*/
class List extends Component {
  render() {
    return (
      <div className="Options">
        <button onClick={this.props.handleClearList}>Clear List</button>
        <ul>
        {this.props.options}
        </ul>
      </div>
    );
  }
}

export default List;