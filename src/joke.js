import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random?category=' + params)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        jokes: json,
      })
    });
  }
  render() {
    let { isLoaded, jokes } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else return (
      <div>
        <div>
          {jokes.map(joke => (
            <div key={joke.id} value={joke.value}>{}</div>
            ))};
        </div>
      </div>
    )
  }
}

export default Joke;