//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import {render} from 'react-dom';

export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userName: "Adam"
      }
    }
      changeStateData = () => {
       this.setState({
          userName: this.state.userName === "Adam" ? "Bob" : "Adam"
        });
      }
      render(){
        return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          { this.state.userName }'s To Do List
        </h4>
        <button className="btn btnd-primary m-2" onClick ={this.changeStateData}>
        change
        </button>

      </div>
    )
  };
}
