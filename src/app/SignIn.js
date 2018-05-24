import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Segment, Header, Icon, Divider, Button } from 'semantic-ui-react';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  getAuthToken = async e => {
    e.preventDefault();
    const { username, password } = this.state;

    try {
      const { data } = await axios.post('/auth', JSON.stringify({ username, password }));
      console.log('new token', data.token);
      localStorage.setItem('notesToken', data.token);
    } catch (e) {
      console.log('eee', e);
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container text>
        <Segment color="purple">
          <Header size="large" content="Sign in" />
          <Form onSubmit={this.getAuthToken}>
            <Form.Input
              onChange={this.onChange}
              name="username"
              label="Username"
              value={username}
              placeholder="john_doe"
              icon={<Icon name="user circle" />}
            />
            <Form.Input
              onChange={this.onChange}
              name="password"
              label="Password"
              type="password"
              value={password}
              placeholder="*******"
              icon={<Icon name="lock" />}
            />
            <Form.Button color="violet" inverted fluid content="Sign in" />
          </Form>
          <Divider horizontal>Or</Divider>
          <Link to="/signup">
            <Button color="black" fluid content="Create new account" />
          </Link>
        </Segment>
      </Container>
    );
  }
}

export default SignIn;
