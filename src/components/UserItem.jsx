import React from 'react';

class UserItem extends React.Component {
  render() {
    const user = this.props.user;
    console.log(user);

    return (
      <tr className='align-middle'>
        <td>
          <span className='align-middle'>{user.name}</span>
        </td>
        <td className='mx-auto'>
          <div className='text-center'>
            <div className='btn-group btn-group-sm'>
              <button className='btn btn-outline-secondary'>
                <i className='fas fa-edit'></i>
              </button>
              <button className='btn btn-primary'>
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

      // <tr>
      //   <td>
      //     <div className="input-group input-group-sm mb3">
      //       <input type="text" className="form-control" value="Jorge Palacios"/>
      //       <button className="btn btn-outline-secondary"><i class="far fa-times-circle"></i></button>
      //       <button className="btn btn-success"><i class="fas fa-check"></i></button>
      //     </div>
      //   </td>
      //   <td className="mx-auto">
      //     <div className="text-center">
      //       <div className="btn-group btn-group-sm invisible">
      //         <button className="btn btn-outline-primary"><i class="fas fa-edit"></i></button>
      //         <button className="btn btn-danger"><i class="fas fa-trash"></i></button>
      //       </div>
      //     </div>
      //   </td>
      //   <td>
      //     <button className="btn btn-sm btn-danger invisible"><i class="fas fa-trash"></i></button>
      //   </td>
      // </tr>

      // <tr className="align-middle">
      //   <td>
      //     <span className="align-middle">Meowth Rocket</span>
      //   </td>
      //   <td className="mx-auto">
      //     <div className="text-center">
      //       <div className="btn-group btn-group-sm">
      //         <button className="btn btn-outline-secondary"><i class="fas fa-edit"></i></button>
      //         <button className="btn btn-primary"><i class="fas fa-tasks"></i></button>
      //       </div>
      //     </div>
      //   </td>
      //   <td>
      //     <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
      //   </td>
      // </tr>

      // <tr className="align-middle">
      //   <td>
      //     <span className="align-middle">Boss Rocket</span>
      //   </td>
      //   <td className="mx-auto">
      //     <div className="text-center">
      //       <div className="btn-group btn-group-sm">
      //         <button className="btn btn-outline-secondary"><i class="fas fa-edit"></i></button>
      //         <button className="btn btn-primary"><i class="fas fa-tasks"></i></button>
      //       </div>
      //     </div>
      //   </td>
      //   <td>
      //     <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
      //   </td>
      // </tr>
    );
  }
}

export default UserItem;
