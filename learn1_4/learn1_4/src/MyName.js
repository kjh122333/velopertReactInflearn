import React, { Component } from 'react'

export default class MyName extends Component {

  static defaultProps = { name: 'defaultProps' };
  render() {
    return (
      <div>
        <h3>MyName.js : Hello My name is {this.props.name}!!!</h3>
      </div>
    )
  }
}
//클래스 밖에서 선언하는것을 최종으로 보는듯 둘다 선언하면 App(Child Class)에서 이거 읽음... 5번 static~ 라인 읽고 초기화 다시하는듯
MyName.defaultProps = { name : 'classOut'};


