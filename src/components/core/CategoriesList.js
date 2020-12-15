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
      <Container maxWidth="lg">
        <ul
      style={{
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
      }}>
          {this.state.categories.map(category => <Button onClick={this.click} key={this.state.categories.id} >{category}</Button>)}<br />
          <br />
        </ul>
        {this.state.data.value}
      </Container>
    )
  }
}
