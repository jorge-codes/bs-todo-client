// components/TaskItem.jsx
import React from 'react';

class TaskItem extends React.Component {
  taskRef = React.createRef();
  state = {
    isWritable: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isWritable: !prevState.isWritable }));
  };

  updateTask = (event) => {
    event.preventDefault();
    // TODO: get values and call update function
    this.toggle();
  };

  renderNormal = (task) => {
    return (
      <tr className='align-center'>
        <td>
          <input type='checkbox' />
        </td>
        <td onClick={this.toggle}>
          <span>{task.description}</span>
        </td>
        <td>
          <button type='button' className='btn btn-sm btn-outline-secondary'>
            <i className='far fa-times-circle'></i>
          </button>
        </td>
      </tr>
    );
  };

  renderWritable = (task) => {
    return (
      <tr className='align-center'>
        <td></td>
        <td>
          <form onSubmit={this.updateTask}>
            <div className='input-group input-group-sm mb3'>
              <input
                ref={this.taskRef}
                defaultValue={task.description}
                type='text'
                className='form-control'
              />
              <button
                onClick={this.toggle}
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
    );
  };

  componentDidUpdate() {
    if (this.state.isWritable) {
      this.taskRef.current.focus();
    }
  }

  render() {
    const task = this.props.task;

    if (this.state.isWritable) {
      return this.renderWritable(task);
    }
    return this.renderNormal(task);
  }
}

export default TaskItem;
