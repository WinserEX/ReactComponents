import { Component } from "react";
import Button from "../Button/button";

class ShowTime extends Component {
    constructor(){
        super()

        this.state = {
            time: new Date(),
            buttonName: "Stop",
            status: 0
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({ time: new Date() });
          }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    clearInt = () => {         
        if (this.state.status === 0) {
            console.log(`0: ${this.state.status} is ${this.state.buttonName}`)
            clearInterval(this.interval)
            this.setState({ status: 1, buttonName: "Stop" })
        }
        else if(this.state.status === 1) {
            console.log(`1: ${this.state.status} is ${this.state.buttonName}`)
            this.interval = setInterval(() => {
                this.setState({ time: new Date() });
              }, 1000);
              this.setState({ status: 0, buttonName: "Start" })
        } else {
            console.log(`else: ${this.state.status}`)
        }

        console.log(`Final: ${this.state.status} is ${this.state.buttonName}`)    
    }
    
    render(){
        

        return (
            <div>
                <>
                    {this.state.time.toLocaleTimeString()}
                </>
                <>
                  <Button 
                    func = {this.clearInt} 
                    name = "Stop/Start"    
                    />  
                </>
            </div>
        )
    }
}

export default ShowTime