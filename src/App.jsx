import './App.css';
import React from 'react';

// Imported components:
import API from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends React.Component {
  modalRef = React.createRef();
  modal = null;

  constructor(props) {
    super(props);
    this.state = {
      users: {},
      tasks: {},
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  componentWillUnmount() {}

  testEndpoint = async () => {
    const res = await API.get('/test');
    console.log('testing endpoint...');
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
    name = name.trim();
    const newUser = { name };
    const res = await API.post(`/user`, newUser);
    const user = res.data;
    let users = { ...this.state.users };
    users[`${user.id}`] = user;
    this.setState({ users });
  };

  updateUser = async (id, name) => {
    name = name.trim();
    const updatedUser = { name };
    const res = await API.patch(`/user/${id}`, updatedUser);
    const user = res.data;
    let users = { ...this.state.users };
    users[`${user.id}`] = user;
    this.setState({ users });
  };

  showTasks = (userId) => {
    console.log(`showTasks userId:${userId}`);
  };

  hideTasks = () => {
    console.log(`hideTasks`);
    this.setState({ isModalOpen: false });
    this.clearTasks();
  };

  clearTasks = () => {
    let tasks = { ...this.state.tasks };
    tasks = {};
    this.setState({ tasks });
  };

  loadTasks = async (userId) => {
    // const res = await API.get(``)
  };

  updateTask = async (id, description) => {
    console.log(`updateTask`);
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
        <UserList
          users={this.state.users}
          deleteUser={this.deleteUser}
          updateUser={this.updateUser}
          showTasks={this.showTasks}
        />

        <section className='container'></section>

        <div id='tasks-modal' className='modal' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title'>User's Tasks</h3>
                <button
                  className='btn-close'
                  type='button'
                  data-bs-dismiss='modal'
                ></button>
              </div>

              <div className='modal-body'>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th className='col-md-1'></th>
                      <th className='col-md-10'></th>
                      <th className='col-md-1'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='align-center'>
                      <td>
                        <input type='checkbox' />
                      </td>
                      <td>
                        <span>Oli</span>
                      </td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          <i className='far fa-times-circle'></i>
                        </button>
                      </td>
                    </tr>
                    <tr className='align-center'>
                      <td></td>
                      <td>
                        <form>
                          <div className='input-group input-group-sm mb3'>
                            <input type='text' className='form-control' />
                            <button
                              type='reset'
                              className='btn btn-outline-secondary'
                            >
                              <i className='far fa-times-circle'></i>
                            </button>
                            <button type='submit' className='btn btn-success'>
                              <i className='fas fa-check'></i>
                            </button>
                          </div>
                        </form>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className='modal-footer'>
                <p></p>
              </div> */}
            </div>
          </div>
        </div>

        {/* App closing div */}
      </div>
    );
  }
}

export default App;
