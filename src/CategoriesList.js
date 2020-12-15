import React from 'react';
import axios from 'axios';
import { Button, Container } from '@material-ui/core';

export default class CategoriesList extends React.Component {
  state = {
    categories: [],
    data: [],
  }

  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
    this.click = this.click.bind(this);
  }

  click(event) {
    this.setState({ isLoading: true });

    axios.get("https://api.chucknorris.io/jokes/random?category=" + this.state.categories, {})
      .then((response) => {
        this.setState({
          data: response.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ data: err, isLoading: false });
      });
  }

  render() {
    return (
      <Container>
        <ul>
          {this.state.categories.map(category => <Button variant="contained" color="primary" onClick={this.click} key={this.state.categories.id} >{category}</Button>)}<br />
          {this.state.data.value}<br />
        </ul>
      </Container>
    )
  }
}
