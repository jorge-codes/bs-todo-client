// components/UserList.js
import React from 'react';

import UserItem from './UserItem';

class UserList extends React.Component {


  render() {
    return (
      <section className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-md-8">Name</th>
              <th className="text-center col-md-2">Actions</th>
              <th className="col-md-1"> </th>
            </tr>
          </thead>

          <tbody>
            {this.props.users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </section>
    );
  }

}

export default UserList;
