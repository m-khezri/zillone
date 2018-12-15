import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault(); // Stop all events and just do this event
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('There was an error', err));
  }


  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;