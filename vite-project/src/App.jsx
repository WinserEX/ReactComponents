import { Component } from 'react'
import './App.css'
import Comp from './funcComp';
class App extends Component {
  //Runs 1st
  constructor() {
    super();
    this.state = {
      count: 0
    }
  } 

  //Runs 3rd
  componentDidMount(){
    console.log("It worked")
  }


  //Runs 2nd, then runs 4th
  render() {
    return(
      <div>
        <Comp job="Project Manager" fname="Winser" lname="Espinal" />             
      </div>
    );
  }
}

export default App
