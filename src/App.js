import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';
import axios from 'axios';
import 'isomorphic-fetch';

import Header from './app/Header';
import Notes from './app/notes';
import SignIn from './app/SignIn';
import SignUp from './app/SignUp';
import Footer from './app/Footer';

const API_URL = process.env.API_URL || 'http://localhost:8080';
// Global API url
axios.defaults.baseURL = API_URL;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('notesToken')}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/user');

      this.setState({ user: data });
      console.log('mount doc', data);
    } catch (e) {
      console.log('mount err', e);
    }
  }

  getUserFromToken = async () => {
    const token = localStorage.getItem('notesToken');

    if (!token) {
      return 'no token!';
    } else {
      const res = await axios.get('/user');

      return res.data;
    }
  };

  render() {
    console.log('our user', this.state.user);
    return (
      <div
        className="container"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header />
        <div className="ui container" style={{ flex: 1 }}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/notes" />} />
            <Route path="/notes" component={Notes} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={() => <h1>About</h1>} />
          </Switch>
          <Divider />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
