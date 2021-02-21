// components/TaskList.jsx
import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {
  render() {
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
          <TaskItem />
        </tbody>
      </table>
    );
  }
}
export default TaskList;
