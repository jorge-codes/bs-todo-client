import './App.css';
import React from 'react';

// Imported components:
import API from './api';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

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
    this.loadTasks(userId);
  };

  hideTasks = () => {
    console.log(`hideTasks`);
    this.setState({ isModalOpen: false });
    this.clearTasks();
  };

  clearTasks = () => {
    this.setState({ tasks: {} });
  };

  loadTasks = async (userId) => {
    console.log(`Loading tasks from userId:${userId}`);
    const res = await API.get(`/task/user/${userId}`);
    const tasks = res.data.reduce((tasks, task) => {
      tasks[`${task.id}`] = task;
      return tasks;
    }, {});
    console.log(tasks);
    this.setState({ tasks });
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
                <TaskForm />
                <TaskList tasks={this.state.tasks} />
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
