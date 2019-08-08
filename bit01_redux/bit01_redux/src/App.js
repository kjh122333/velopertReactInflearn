import React, { Component } from 'react';
import { connect } from 'react-redux';
//리듀서; 입력인수는 2개로 유지, but 받기싫으면 null로
// `SWITCH`문 필수
export function reduser(state = { number: 10 }/*state 초기값 설정(개중요!) */, action) {

  //(필수)
  switch (action.type) {
    //TO-DO
    //////////////////////////////////////////////////////////////////////////////////
    case 'MyClick':
      console.log('come in switch myclick');
      return state;
    //리듀스에서는 case ~ return 문 3줄이 추가되냐 마냐 임.
    //////////////////////////////////////////////////////////////////////////////////
    default: return state;


    // 1. state의  갱신은 모두 리듀스 안에서 일어나야함, ARS을 제외한 곳에서는 값 갱신이 있어어는 안됨
    // 2. 리듀스 함수는 무조건 순수 함수(함수 내에서 (1)value 갱신, (2)외부에서 변수를 가지고 오면 안됨) 여야함
    //(개중요!)state와 action의 값을 변경시키지말라는 소리가 1,2 이다
    // 리듀스에서 state 초기값 설정이 필요함
    // + reduser's Action : 


  }
}

class App extends Component {


  /**
   * 1. 액션(이벤트) 설정
   * 2. 분기문에 해당하는 디스패치(post) 설정
   * 3. 리듀스(스위치문, get)에 분기문 설정
   * 
   *  >>> action's dispatch --(onMyClick)--> reduser
   */
  //리듀스는 일반 함수로 작성, =>

  render() {
    return (
      <div>
        <button onClick={this.props.onMyClick}></button>
      </div>
    )
  }
}
//action = event와 동일
const act01TO = () => {
  console.log('act01');

  return {
    // 기본적으로 제공 되는 `onclick`을 사용하는게 아니라 내가 만든 onMyClick을 사용하겠따.
    onMyClick: (dispatch) => {
      console.log(' start dispatch myclick');
      //dispatch : 다른 곳으로 보내주는 역할
      dispatch({
        type: 'MyClick'
      })
    }

  }
}//액션이 끝나면 리듀스로 감 (리듀스는 body가 스위치로 되어있음,  분기 기준을 내가 정함( onMyClick ) <<< 리듀스안에는 내가 정한 분기문이 있어야됨.)

//state01To --return--> component  
const state01To = (state) => {

  return {
    //여기서 갱신 가능하다고 처하면 안됨
    // 갱신은 리듀스에서...
    num: state.num
  }
}
export default connect(
  state01To,
  act01TO
)(App);