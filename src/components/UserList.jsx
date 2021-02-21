// components/UserList.js
import React from 'react';

import UserItem from './UserItem';

class UserList extends React.Component {
  render() {
    const users = this.props.users;

    return (
      <section className='container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th className='col-md-9'>Name</th>
              <th className='text-center col-md-2'>Actions</th>
              <th className='col-md-1'> </th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(users).map((key) => (
              <UserItem
                key={key}
                index={key}
                user={users[key]}
                deleteUser={this.props.deleteUser}
                updateUser={this.props.updateUser}
                showTasks={this.props.showTasks}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default UserList;
