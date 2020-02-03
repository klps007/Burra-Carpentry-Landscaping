import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class ProtectedRoute extends React.Component {
  state = {
    auth: false,
    loading: true
  };

  async componentDidMount() {
    try {
      await axios.get('http://localhost:7070/admin/verify-token', {
        headers: {
          token:
            localStorage.getItem('token')
        }
      });
      this.setState({
        auth: true,
        loading: false
      });
    } catch (err) {
      this.setState({
        auth: false,
        loading: false
      });
    }
  }

  render() {
    const { loading, auth } = this.state;
    if (loading) {
      return null;
    } else if (!auth) {
      return <Redirect to='/' />;
    } else {
      const Component = this.props.component;
      return <Component />;
    }
  }

  // 1. hit the backend to check if jwt is all good
  // 2. if it's all good we can render the admin component that we passed through as a prop otherwise we'll need to redirect the user somewhere else
}

export default ProtectedRoute;
