
import React, { Component } from 'react'

const FunctionalComponent01 = ({ name }) => { return (<h3> FunctionalComponent.js : This is {name} ! </h3>) };

FunctionalComponent01.defaultProps = { name: 'Functional Component' };
export default FunctionalComponent01;