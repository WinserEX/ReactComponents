import { Component } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';


class App extends Component {
  //Runs 1st
  constructor() {
    super();
  }

  //Runs 3rd
  componentDidMount(){
    console.log("It worked")
  }

  //Runs 2nd, then runs 4th
  render() {
    return(
      <div>      
        <Button variant="primary">Click me!</Button>
      </div>
    );
  }
}
export default App
