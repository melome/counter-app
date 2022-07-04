import React, {Component} from 'react'

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <h2>counter app</h2>
        <button onClick={this.increment}>Increment</button>
        <br />
        {this.state.count > 0 ? 
        <p>You clicked {this.state.count} times</p> 
        :<p>Click the button!</p>}
      </div>
    )
  }
}

export default App;