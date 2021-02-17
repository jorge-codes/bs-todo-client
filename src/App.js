import './App.css';

// import React, {useState} from 'react';
import React from 'react';

// Imported components:
import API from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    console.log('environment variables');
    console.log(`api_url: ${process.env.REACT_APP_API_URL}`);
    this.testEndpoint();
  }

  testEndpoint = async () => {
    const res = await API.get("/test");
    console.log(res.data);
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

        <UserForm />

        <UserList />
      </div>
    );
  }

}

export default App;
