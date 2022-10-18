import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, Form, Button, Input } from './searchBarStyle';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({
      request: value.trim(),
    });
  };

  handleSubmit = evt => {
    const { request } = this.state;
    const { onSubmit } = this.props;
    const { reset } = this;

    evt.preventDefault();
    onSubmit(request.toLowerCase());
    reset();
  };

  reset = () => {
    this.setState({
      request: '',
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { request } = this.state;

    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <ImSearch className="icon-serch" />
          </Button>

          <label>
            <Input
              type="text"
              autoComplete="off"
              onChange={handleChange}
              value={request}
              autoFocus
              placeholder="Search images and photos"
            />
          </label>
        </Form>
      </Header>
    );
  }
}
