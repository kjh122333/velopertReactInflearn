# REDUX

## 개념
***ARS( Action - Reduser - State )***
 - `Store`
 - `Action`
 - `Dispatch`
 - `Reduser`
 - `Subscript`



## Redux 설치
 ___`--save` : package.json에 기록이됨___
 1. > npm install redux --save
 2. > npm install react-redux --save
 3. > npm install redux-actions --save
 4. > redus는 1개 이상일 수 있기때문에 앞으로 리듀스 함수라는 것을 등록 해줘야함.   (store에 등록)
    > Store : 옵저버, 리듀스를 등록하는 곳
    > `index.js` 에 import

 5.  
 `index.js` 설정
 ```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//리듀스를 스토어에 등록 하는 작업
import App, {reduser} from './App'; //작업1
import {createStore} from 'redux'; //작업2
import Provider from 'react-redux'; //작업3
import * as serviceWorker from './serviceWorker';
const store = createStore(reduser);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//store
//*컴포넌트는 액션과 스테이트를 사용가능하고 밖에 리듀스가 있다
//실행 순서는  액션 후 리듀스 후 스테이트*
 ```

 6. 

```console

```