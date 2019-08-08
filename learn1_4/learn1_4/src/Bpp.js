import React, { Component } from 'react'

export default class Bpp extends Component {
  n1 = 10;
  state = {
    n2: 'hou',
    n3: 0,
    ani: 'dog'
  }

  handleRandom = () => {
    let n4 = Math.floor(Math.random() * 3) + 1;

    if (n4 === 1) this.setState({ ani: 'dog' })
    if (n4 === 2) this.setState({ ani: 'cat' })
    if (n4 === 3) this.setState({ ani: 'kjh' })
  }

  render() {
    return (
      <div>
        <h3> n1 : {this.n1}</h3>
        <h3> n2 : {this.state.n2}</h3>
        <h3>ani : {this.state.ani}</h3>
        <button onClick={this.handleRandom}> Random </button>
      </div>
    )
  }
}
