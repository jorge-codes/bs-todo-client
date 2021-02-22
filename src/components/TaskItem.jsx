// components/TaskItem.jsx
import React from 'react';

class TaskItem extends React.Component {
  descriptionRef = React.createRef();
  stateRef = React.createRef();

  state = {
    isWritable: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isWritable: !prevState.isWritable }));
  };

  updateTask = (state, description) => {
    const id = this.props.task.id;
    this.props.updateTask(id, state, description);
  };

  updateState = (event) => {
    const state = this.stateRef.current.checked ? 1 : 0;
    const description = this.props.task.description;
    this.updateTask(state, description);
  };

  updateDescription = (event) => {
    event.preventDefault();
    const state = this.props.task.state;
    const description = this.descriptionRef.current.value;
    this.updateTask(state, description);
    this.toggle();
  };

  renderNormal = (task) => {
    return (
      <tr className='align-center'>
        <td>
          <input
            onClick={this.updateState}
            ref={this.stateRef}
            type='checkbox'
            defaultChecked={task.state === 1 ? true : false}
          />
        </td>
        <td onClick={this.toggle}>
          {task.state === 1 ? (
            <span>
              <del>{task.description}</del>
            </span>
          ) : (
            <span>{task.description}</span>
          )}
        </td>
        <td>
          <button
            onClick={() => {
              this.props.deleteTask(task.id);
            }}
            type='button'
            className='btn btn-sm btn-outline-secondary'
          >
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
          <form onSubmit={this.updateDescription}>
            <div className='input-group input-group-sm mb3'>
              <input
                ref={this.descriptionRef}
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
      this.descriptionRef.current.focus();
    }
  }

  componentDidMount() {
    console.log('TaskItem mounted');
    console.log(this.props.task);
    const isDone = this.props.task.value === 1 ? true : false;
    console.log(`  isDone:${isDone}`);
    this.setState({ isDone });
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
