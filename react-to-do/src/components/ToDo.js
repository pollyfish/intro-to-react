import React, { Component } from 'react';

class ToDo extends Component {
render() {
  return (
    <li>
    <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
    <span>{ this.props.description }</span>
    <input type="button" clicked= { this.props.isDeleted} onClick={ this.props.toggleDelete}/>
     </li>
  );
}
}

export default ToDo;
