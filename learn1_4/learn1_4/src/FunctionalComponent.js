import React, { Component } from 'react'
//함수형 컴포넌트
//초기 마운트가 미세하게 빠름(클래스로 만드는 것 보다...)
//필요한 것만으로 구성하기에 메모리값도 적어짐  
// +  프레제이션 컴포넌트 컨테이너 컴포넌트 알아보기
const FunctionalComponent = ({ name }) => {
  return (<h3>
    {/* This is Functional Component !*/}
    FunctionalComponent.js : This is {name} !
    </h3>
  )
};
FunctionalComponent.defaultProps = { name: 'Functional Component' };
//import를 하려면 import당하는 js, class, function을 export해줘야 알아먹는다; ㅆㅃ
export default FunctionalComponent ;

