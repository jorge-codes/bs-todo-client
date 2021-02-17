import './App.css';

import React from 'react';

// Imported components:
import API from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  testEndpoint = async () => {
    const res = await API.get("/test");
    console.log(res.data);
  }

  loadUsers = async () => {
    const res = await API.get("/user");
    const users = res.data;
    this.setState({ users });
  }

  addNewUser = (user) => {

  }

  render() {
    return (
      <div className="App">
        <header className="container">
          <h1 className="display-4 text-center">
            <strong>TO-DO APP</strong>
          </h1>
        </header>

        <UserForm addNewUser={this.addNewUser} />

        <UserList users={this.state.users} />
      </div>
    );
  }

}

export default App;
