import React, { Component } from 'react'

export default class Counter extends Component {
  //state 는 객체 형태여야함
  state = { number: 0 }
  // +, - 짓을 하려면(변화를 주려면) custom method 생성

  handleIncrease = () => {
    //ㅋㅋㅋㅋㅋ 하지마라 ㅋ
    //this.state.number = this.state.number+1;
    this.setState({ number: this.state.number + 1 })
  }
  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 })
  }
  handleReset = () => {
    this.setState({ number: 0 })
  }
  // => 형을 안쓰면 컴포넌트에서 this가 도대체가 뭔지 모름
  //constructor : 컴포넌트가 만들어질때 마다 호출되는 함수
  constructor(props) {
    super(props);
    //handleMultiTen에서 사용하는 this가 여기의 this이다~ 를 알려주야됨
    this.handleMultiTen = this.handleMultiTen.bind(this);
  }
  handleMultiTen() {
    this.setState({ number: this.state.number * 10 })
  }
  render() {
    return (
      <div>
        <h3>Counter.js</h3>
        <div>value = {this.state.number}</div>
        {/* 선언된 methode들을 클릭하면 반응시켜라 */}
        <button onClick={this.handleIncrease}> + </button>
        <button onClick={this.handleDecrease}> - </button>
        <button onClick={this.handleMultiTen}> *10 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>                                                             
    )
  }
}
