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
      currentUser: '',
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

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
    this.loadTasks(userId);
    //FIXME: Implement here showing the modal via JS
  };

  hideTasks = () => {
    this.setState({ isModalOpen: false });
    this.clearTasks();
  };

  clearTasks = () => {
    this.setState({ tasks: {} });
  };

  loadTasks = async (userId) => {
    const res = await API.get(`/task/user/${userId}`);
    const tasks = res.data.reduce((tasks, task) => {
      tasks[`${task.id}`] = task;
      return tasks;
    }, {});
    console.log(tasks);
    this.setState({ tasks, currentUser: userId });
  };

  addTask = async (userId, description) => {
    description = description.trim();
    const newTask = { userId, description };
    console.log(newTask);
    const res = await API.post(`/task`, newTask);
    const task = res.data;
    let tasks = { ...this.state.tasks };
    tasks[`${task.id}`] = task;
    this.setState({ tasks });
  };

  deleteTask = async (id) => {
    const res = await API.delete(`/task/${id}`);
    const task = res.data;
    const tasks = { ...this.state.tasks };
    delete tasks[`${task.id}`];
    this.setState({ tasks });
  };

  updateTask = async (id, state, description) => {
    console.log(`Updating task...`);
    description = description.trim();
    const updatedTask = { description, state };
    const res = await API.patch(`/task/${id}`, updatedTask);
    const task = res.data;
    console.log(task);
    let tasks = { ...this.state.tasks };
    tasks[`${task.id}`] = task;
    this.setState({ tasks });
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
                <TaskForm
                  addTask={this.addTask}
                  userId={this.state.currentUser}
                />
                <TaskList
                  deleteTask={this.deleteTask}
                  updateTask={this.updateTask}
                  tasks={this.state.tasks}
                />
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
