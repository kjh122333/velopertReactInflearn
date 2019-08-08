import React, { Component } from 'react';
//props
import MyName from './MyName';
import FunctionalComponent from './FunctionalComponent'
//state
import Counter from './Counter';
//Bpp
import Bpp from './Bpp';



export default class App extends Component {


  render() {
    return (
      <div>
        <h1>Props</h1>
        <MyName></MyName>
        <MyName name='REACT!'></MyName>
        <FunctionalComponent></FunctionalComponent>
        <hr />

        <h1>State</h1>
        <Counter></Counter>
        <hr />

        <h1>Bpp</h1>
        <Bpp></Bpp>
        <hr/>

      </div>
    )
  }
}