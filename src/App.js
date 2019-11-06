import React from 'react';
import CounterButton from "./CounterButton";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter : 0
    }

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({counter: this.state.counter+1})
  }

  render() {
    return (
      <div className="App">
        <CounterButton 
          count={this.state.counter}
          increaseCountCallback={this.increaseCounter}
        />
      </div>
    );
  }
}

export default App;
