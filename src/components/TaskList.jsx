// components/TaskList.jsx
import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks;

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className='col-md-1'></th>
            <th className='col-md-10'></th>
            <th className='col-md-1'></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tasks).map((key) => (
            <TaskItem
              key={key}
              task={tasks[key]}
              deleteTask={this.props.deleteTask}
              updateTask={this.props.updateTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
export default TaskList;
