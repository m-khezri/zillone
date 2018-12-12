import React, { Component } from 'react';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';
import Listings from '../components/Listings/Listings';

class App extends Component {

  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    this.setState({ authed: true })
  }

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      )
    }


    return (
      <div className="App">
        <Auth />
        <Listings />
      </div>
    );
  }
}
export default App;