import React, { Component } from 'react';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';
import Listings from '../components/Listings/Listings';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequest from '../helpers/data/authRequest';
import firebase from 'firebase/app';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }
  render() {

    const logoutClickEvent = () => {
      authRequest.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          < div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }


    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <Listings />

      </div>
    );
  }
}
export default App;