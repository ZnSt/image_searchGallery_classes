import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Form, Input, Btn, Span } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imageValue: '',
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (this.state.imageValue === '') {
      toast.error('Hold On!');
      return;
    }
    this.props.onSubmit(this.state.imageValue);
    this.reset();
  };
  hanndleChangeInput = event => {
    this.setState({
      imageValue: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      imageValue: '',
    });
  };
  render() {
    const { imageValue } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
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
