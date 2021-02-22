// components/TaskForm.jsx
import React from 'react';

class TaskForm extends React.Component {
  taskRef = React.createRef();

  addTask = (event) => {
    event.preventDefault();
    const description = this.taskRef.current.value;
    this.props.addTask(this.props.userId, description);

    event.currentTarget.reset();
  };

  render() {
    return (
      <section className='container'>
        <form onSubmit={this.addTask}>
          <label htmlFor='input-user-name' className='form-label'>
            Add new task
          </label>
          <div className='input-group mb-4'>
            <input
              type='text'
              name='name'
              ref={this.taskRef}
              className='form-control'
              id='input-task-description'
              placeholder='Example: Do a barrelroll!'
              size='250'
            />
            <button type='submit' id='btn-task-add' className='btn btn-success'>
              Add
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default TaskForm;
