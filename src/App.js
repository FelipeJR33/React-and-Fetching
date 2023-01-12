import './App.css';
import {Component} from "react";


class App extends Component {

state = {
    name: "Felipe",
    counter:0,
    gCounter:0,
    greet: "Seja bem vindo,",
    repetitions:""
};

handlePClick = () =>{
  const {name,gCounter} = this.state;
  const newCounter = gCounter+ 1
  const newName = name === "Felipe" ? "Ismael" : "Felipe"
  const newRepetition = gCounter <= 1 ? "Legal, né? Quando você clica, o nome muda!" : `O número de vezes que você fez essa graça é ${gCounter}`
  this.setState({name:newName,
  gCounter:newCounter,
repetitions:newRepetition})
}

handleBDown= () => {
  const {counter} = this.state
  let newCounter = 0
  if (counter -1 < 0) {
    newCounter= 0
  } else {
    newCounter = counter -1 
  }

  this.setState({counter:newCounter})
}
handleBUp= () => {
  const {counter} = this.state
  let newCounter = 0
  if (counter +1 > 10) {
    newCounter= 10
  } else {
    newCounter = counter +1 
  }

  this.setState({counter:newCounter})
}
handleBReset= () => {
  const newCounter = 10
  this.setState({counter:newCounter})
}


  render() {

    const {name,greet,repetitions,counter} = this.state


    return (
      <>
      <div className="App">
        <div className="Greeter" onClick={this.handlePClick}>
          <p>{greet} {name}! {repetitions}</p>
        </div>
        <div className="counter">
          <p>
            {counter}
          </p>
          <button onClick={this.handleBDown}>COUNTDOWN</button>
          <button onClick={this.handleBUp}>COUNT</button>
          <button onClick={this.handleBReset}>SET TO 10</button>
          </div>  
      </div>
      </>
    );
  }
}

export default App;
