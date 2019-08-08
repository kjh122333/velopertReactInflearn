import React, { Component } from 'react'
//리듀서; 입력인수는 2개로 유지, but 받기싫으면 null로
// `SWITCH`문 필수
function reduser(state, action) {

  switch (action.type) {
    //TO-DO
    //////////////////////////////////////////////////////////////////////////////////
    case 'MyClick':
      console.log('come in switch myclick');
      return state;
    //리듀스에서는 case ~ return 문 3줄이 추가되냐 마냐 임.
    //////////////////////////////////////////////////////////////////////////////////
    default: return state;

  }
}

export default class App extends Component {
  //action = event와 동일
  act01 = () => {
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
  }//액션이 끝나면 리듀스로 감 (리듀는 body가 스위치로 되어있음,  분기 기준을 내가 정함( onMyClick ) <<< 리듀스안에는 내가 정한 분기문이 있어야됨.)


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
      </div>
    )


  }
}
