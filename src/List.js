import React, { Component } from 'react';


class List extends Component {
  render() {
    return (
      <div className="Options">
        <ul>
        {this.props.options}
        </ul>
      </div>
    );
  }
}

export default List;