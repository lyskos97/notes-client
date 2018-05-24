import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Segment, Header, Icon, Divider, Button } from 'semantic-ui-react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    const { login, password } = this.state;

    return (
      <Container text>
        <Segment color="purple">
          <Header size="large" content="Create new account" />
          <Form>
            <Form.Input
              label="Login"
              value={login}
              placeholder="john_doe"
              icon={<Icon name="user circle" />}
            />
            <Form.Input
              label="Password"
              type="password"
              value={password}
              placeholder="*******"
              icon={<Icon name="lock" />}
            />
            <Form.Button color="violet" inverted fluid content="Sign up" />
          </Form>
          <Divider horizontal>Or</Divider>

          <Link to="/signin">
            <Button color="black" fluid content="Login to existing account" />
          </Link>
        </Segment>
      </Container>
    );
  }
}

export default SignUp;
