// components/UserForm.js
import React from 'react';

class UserForm extends React.Component {
  nameRef = React.createRef();

  addUser = (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value.trim();
    this.props.addUser(name);
    event.currentTarget.reset();
  };

  render() {
    return (
      <section className='container'>
        <form onSubmit={this.addUser}>
          <label htmlFor='input-user-name' className='form-label'>
            Add new user
          </label>
          <div className='input-group mb-4'>
            <input
              autoFocus
              type='text'
              name='name'
              ref={this.nameRef}
              className='form-control'
              id='input-user-name'
              placeholder='Example: Jessy Rocket'
              size='250'
            />
            <button type='submit' id='btn-user-add' className='btn btn-success'>
              Add
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default UserForm;
