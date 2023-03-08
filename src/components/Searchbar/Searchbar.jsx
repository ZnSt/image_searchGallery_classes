import { Component } from 'react';
import { Header, Form, Input, Btn, Span } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imageValue: '',
  };
  hanndleChangeInput = event => {
    this.setState({
      imageValue: event.currentTarget.value,
    });
  };
  render() {
    const { imageValue } = this.state;
    return (
      <Header>
        <Form>
          <Btn type="submit">
            <Span>Search</Span>
          </Btn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hanndleChangeInput}
            value={imageValue}
          />
        </Form>
      </Header>
    );
  }
}
