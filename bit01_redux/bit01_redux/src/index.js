import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//리듀스를 스토어에 등록 하는 작업
import App, {reducer} from './App'; //작업1
import {createStore} from 'redux'; //작업2
import {Provider} from 'react-redux'; //작업3
import * as serviceWorker from './serviceWorker';
const store = createStore(reducer);


//store에 저장되는 순간이 갱신이 되는 순간.
//리듀스로 값이 갱신된다
ReactDOM.render(<Provider store={store}><App>
    {console.log("index.js_App tag")}
</App>{console.log('store in')}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


