# Section4 : Props& State

## ***Props***
 > *Parents Component가 Child Component에게 value를 전달할 때 넘겨줄 때 사용.*

`App.js`
```javascript
import React, { Component } from 'react';
import MyName from './MyName';
import FunctionalComponent from './FunctionalComponent'
export default class App extends Component {
  render() {
    return (
      <div>
         <h1>Props</h1>
         <MyName></MyName>
         <MyName name = 'REACT!'></MyName>
         <FunctionalComponent></FunctionalComponent>
         <hr/>
      </div> 
    )
  }
}
```
 > MyName이라는 곳(상속받아서 사용할 곳)에 name이라는 변수에 REACT를 넣을게
```javascript
<MyName name = 'REACT!'></MyName>
```
---
`MyName.js` : App.js의 부모 클래스에 해당됨(import를 App에서 함..)
```javascript
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
MyName.defaultProps = { name : 'classOut'};
```
 > 자식(App.js)에서 보낼 놈(값)을 **{this.props.name}** 으로 받을수 있게 세팅해놓을게~
```javascript
<h3>MyName.js : Hello My name is {this.props.name}!!!</h3>
```
 > 자식(App.js)이 놈(값)을 안보내더라도 기본으로 나타낼 값을 설정해놓을게~
```javascript
static defaultProps = { name: 'defaultProps' };
```
 > 클래스 밖에서 선언하는것을 최종으로 보는듯 둘다 선언하면 App(Child Class)에서 이거 읽음... 5번 static~ 라인 읽고 초기화 다시하는듯 , 위에 꺼랑 같음
```javascript
export default class MyName extends Component {
    . . .
}
MyName.defaultProps = { name : 'classOut'};
```
<hr>

`FunctionalComponent.js`   
***함수형 컴포넌트***
 - 초기 마운트가 미세하게 빠름(클래스로 만드는 것 보다...)
 - 필요한 것만으로 구성하기에 메모리값도 적어짐  
 - 프레제이션 컴포넌트, 컨테이너 컴포넌트 알아보기....
```javascript
import React, { Component } from 'react'
const FunctionalComponent = ({ name }) => {
  return (<h3>
    {/* This is Functional Component !*/}
    FunctionalComponent.js : This is {name} !
    </h3>
  )
};
FunctionalComponent.defaultProps = { name: 'Functional Component' };
export default FunctionalComponent ;
```
 > 기존의 클래스 선언과 달리 함수형으로 선언하였음, 
```javascript
const FunctionalComponent = ({ name }) => 
{ return (<h3> FunctionalComponent.js : This is {name} ! </h3> )};
```
> 함수형 컴포넌트에서도 defaultprops 가능!
```javascript
FunctionalComponent.defaultProps = { name: 'Functional Component' };
```
> import를 하려면 import당하는 js, class, function을 export해줘야 알아먹는다; ㅆㅃ     
> `rcc`로 만들거나 어쨋든 클래스 기본 만들때 선언부?에 export해도되는데 안하면 스코프 끝나고 밖에서 ***export무조건 선언*** 해야됨!
```javascript
export default FunctionalComponent ;
```

___1줄 요약 : `props`는 부모가 자식에게 읽기전용으로 자신을 참조하라고 주는 용도___





## ***State***
 > - 컴포넌트 자신이 들고있다.
 > - 변경이 필요하면 `seState()`를 사용

`Counter.js` : App.js에서 이제 +, - 등을 통해서 값의 변화를 주는 js
```javascript
import React, { Component } from 'react'

export default class Counter extends Component {

  state = { number: 0 }

  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 })
  }
  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 })
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

      </div>
    )
  }
}
```

> state 는 객체 형태여야함
```javascript
  state = { number: 0 }
```
 > - +, - 짓을 하려면(변화를 주려면) custom method 생성  
 > - `this.state.number = this.state.number+1` (ㅋㅋㅋㅋㅋ 하지마라 ㅋ)
 > - `setState`를 사용해야됨(위에 처럼 ㅋ 해보셈 ㅋ)
```javascript
  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 })
  }
  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 })
  }
```
 > - handleMultiTen에서 사용하는 this가 여기의 this이다~ 를 알려주야됨
 > - `=> 형` 을 안쓰면 컴포넌트에서 this가 도대체가 뭔지 모름
 > - 만약에 쓴다면 `constructor` 만들어 줘야됨.
 > - `constructor` : 컴포넌트가 만들어질때 마다 호출되는 함수
```javascript
  constructor(props) {
    super(props);
    this.handleMultiTen = this.handleMultiTen.bind(this);
  }
  handleMultiTen() {
    this.setState({ number: this.state.number * 10 })
  }
```
