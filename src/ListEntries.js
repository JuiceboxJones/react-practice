import React, { Component } from 'react';



class ListEntries extends Component {

    
  render() {
    return (
      <div className="ListEntries">
        <form onSubmit={e => this.props.handleAddToList(e)}>
            <input type ='text' name="item"></input>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ListEntries;