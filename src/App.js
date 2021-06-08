//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import {render} from 'react-dom';

export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userName: 'Adam',
        handicap: '7',
        averageScore: '85',
        score: '79'
      }
    }

  render() { 
    return (<div>{this.state.userName}
    {this.state.handicap}
    {this.state.averageScore}
    {this.state.score}</div> )
  }
}
{ 

onChange= { => {
  const val_userName = e.target.value;
  if(e.target.placeholder === userName){
  setUsername(prevState => {
    return Object.assign({}, prevState, { userName: val });
  });
}
  else if(e.target.placeholder === "Enter handicap")
  {
  sethandicap(prevState => {
    return Object.assign({}, prevState, {handicap: val })
  })
} else if (e.target.placeholder === "Enter average score"){
  setaverageScore(prevState => {
  return Object.assign({}, prevState, {averageScore : val})
  })
  else if (e.target.placeholder === "Enter score"){
    setscore(prevState => {
    return Object.assign({}, prevState, {score: val}
  })
  else {
    setUsername(prevState => {
    return Object.assign({}, prevState, { userName: val });
  });
  sethandicap(prevState => {
    return Object.assign({}, prevState, {handicap: val })
  })
  setaverageScore(prevState => {
  return Object.assign({}, prevState, {averageScore : val})
  })
  setscore(prevState => {
    return Object.assign({}, prevState, {score: val}
  })


  }
}
}}

const MessageList = () => {
  const [userName, setuserName] = useState("");
  const [userNameList, setuserNameList] = useState([]);
  const [handicap, sethandicap] = useState("");
  const [handicapList, sethandicapList] = useState([]);
  const [averageScore, setaverageScore] = useState("");
  const [averageScoreList, setaverageScoreList] = useState([]);
  const [score, setscore] = useState("");
  const [scoreList, setscoreList] = useState([]);


  return (
    <div>
      <input
        type="text"
        value={userName}
        placeholder="userName"
        onChange={e => {
          setuserName(e.target.value);
        }}
      />
      <input 
        type="text"
        value={handicap}
        placeholder="Enter handicap"
        onChange = {e => {
          sethandicap(e.target.value)

        }}
      />
      <input 
        type="text"
        value={averageScore}
        placeholder="Enter average score"
        onChange = {e => {
          setaverageScore(e.target.value)

        }}
      />
      <input 
        type="text"
        value={score}
        placeholder="Enter score"
        onChange = {e => {
          setscore(e.target.value)

        }}
      />
      <input
        type="button"
        value="Add"
        onClick={e => {
          setuserNameList([
           userNameList,
            {
              userName: userName
            }
          ]);
          sethandicapList([
           handicapList,
            {
              handicap: handicap
            }
          ]);
          setaverageScoreList([
           averageScoreList,
            {
              averageScore: averageScore
            }
          ]);
          setscoreList([
           scoreList,
            {
              score: score
            }
          ]);
          setuserName("");
          sethandicap("");
          setaverageScore("");
          setscore("");
        }}
      />
      <ul>
        {messageList.map(m => (
          <li>{m.userName}{m.handicap}{m.averageScore}{m.score}</li>
        ))}
      </ul>
    </div>
  );
};
}
