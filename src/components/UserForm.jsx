// components/UserForm.js

import React from 'react';


class UserForm extends React.Component {

  addNewUser = (event) => {
    event.preventDefault();
  }

  render() {
      return (
        <section className="container">
          <form>
            <label htmlFor="input-user-name" className="form-label">
              Add new user
            </label>
            <div className="input-group mb-4">
              <input
                autoFocus
                type="text"
                className="form-control"
                id="input-user-name"
                placeholder="Example: Jessy Rocket"
              />
              <button
                type="submit"
                id="btn-user-add"
                className="btn btn-success"
                onClick={this.addNewUser}
              >
                Add
              </button>
            </div>
          </form>
        </section>
      );
  }
}

export default UserForm;
