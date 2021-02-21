import React from 'react';

class UserItem extends React.Component {
  nameRef = React.createRef();
  state = {
    isWritable: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isWritable: !prevState.isWritable }));
  };

  updateUser = (event) => {
    event.preventDefault();
    const id = this.props.user.id;
    const newName = this.nameRef.current.value;
    this.props.updateUser(id, newName);
    this.toggle();
  };

  renderNormal = (user) => {
    return (
      <tr className='align-middle'>
        <td>
          <span className='align-middle'>{user.name}</span>
        </td>
        <td className='mx-auto'>
          <div className='text-center'>
            <div className='btn-group btn-group-sm'>
              <button
                onClick={this.toggle}
                className='btn btn-outline-secondary'
              >
                <i className='fas fa-edit'></i>
              </button>
              <button
                className='btn btn-primary'
                type='button'
                onClick={() => this.props.showTasks(user.id)}
                // FIXME: this needs to be removed and leverage everything into the 'showTasks' function
                // I was wasting so much time solving dependency hell via react-bootstrap so decided to not use it for now
                data-bs-toggle='modal'
                data-bs-target='#tasks-modal'
                // **************************
              >
                <i className='fas fa-tasks'></i>
              </button>
            </div>
          </div>
        </td>
        <td>
          <button
            onClick={() => this.props.deleteUser(user.id)}
            className='btn btn-sm btn-danger'
          >
            <i className='fas fa-trash'></i>
          </button>
        </td>
      </tr>
    );
  };

  renderWritable = (user) => {
    return (
      <tr>
        <td>
          <form onSubmit={this.updateUser}>
            <div className='input-group input-group-sm mb3'>
              <input
                ref={this.nameRef}
                defaultValue={user.name}
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
        <td className='mx-auto'></td>
        <td></td>
      </tr>
    );
  };

  componentDidUpdate() {
    if (this.state.isWritable) {
      this.nameRef.current.focus();
    }
  }

  render() {
    const user = this.props.user;
    if (this.state.isWritable) {
      return this.renderWritable(user);
    } else {
      return this.renderNormal(user);
    }
  }
}

export default UserItem;
