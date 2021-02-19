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
      users: {},
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  testEndpoint = async () => {
    const res = await API.get('/test');
    console.log(res.data);
  };

  loadUsers = async () => {
    const res = await API.get('/user');
    const users = res.data.reduce((users, user) => {
      users[`${user.id}`] = user;
      return users;
    }, {});

    this.setState({ users });
  };

  deleteUser = async (id) => {
    const res = await API.delete(`/user/${id}`);
    const user = res.data;
    let users = { ...this.state.users };
    delete users[user.id];
    this.setState({ users });
  };

  addUser = async (name) => {
    const newUser = { name };
    const res = await API.post(`/user`, newUser);
    const user = res.data;
    let users = { ...this.state.users };
    users[`${user.id}`] = user;
    this.setState({ users });
  };

  render() {
    return (
      <div className='App'>
        <header className='container'>
          <h1 className='display-4 text-center'>
            <strong>TO-DO APP</strong>
          </h1>
        </header>
        <UserForm addUser={this.addUser} />
        <UserList users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
