import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CategoriesList from './components/core/CategoriesList'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
          <CategoriesList/>
      </div>
    )
  }
}
