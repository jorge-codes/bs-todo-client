import './App.css';

function App() {
  return (
    <div className="App">

      <header className="container">
        <h1 className="display-4 text-center"><strong>TO-DO APP</strong></h1>
      </header>

      <section className="container">
        <form>
          <label htmlFor="input-user-name" className="form-label">Enter user's name</label>
          <div className="input-group mb-5">
            <input type="text" className="form-control" id="input-user-name" placeholder="Example: Jessy Rocket"/>
            <button className="btn btn-success">Add</button>
          </div>
        </form>
      </section>

      <section className="container">
        <h1> </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-md-8">Name</th>
              <th className="text-center col-md-2">Actions</th>
              <th className="col-md-1"> </th>
            </tr>
          </thead>

          <tbody>

            <tr className="align-middle">
              <td>
                <span className="align-middle">Jessy Rocket</span>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary"><i className="fas fa-edit"></i></button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#task-list-modal"><i className="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>


            <tr>
              <td>
                <div className="input-group input-group-sm mb3">
                  <input type="text" className="form-control"/>
                  <button className="btn btn-outline-secondary"><i className="far fa-times-circle"></i></button>
                  <button className="btn btn-success"><i className="fas fa-check"></i></button>
                </div>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm invisible">
                    <button className="btn btn-outline-primary"><i className="fas fa-edit"></i></button>
                    <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger invisible"><i className="fas fa-trash"></i></button>
              </td>
            </tr>


            <tr className="align-middle">
              <td>
                <span className="align-middle">Meowth Rocket</span>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary"><i className="fas fa-edit"></i></button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#task-list-modal"><i className="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>

            <tr className="align-middle">
              <td>
                <span className="align-middle">Boss Rocket</span>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary"><i className="fas fa-edit"></i></button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#task-list-modal"><i className="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
              </td>
            </tr>


          </tbody>
        </table>
      </section>

      <div id="task-list-modal" className="modal" aria-hidden="true" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="task-list-title">Modal Title</h5>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <label htmlFor="input-task-description" className="form-label">Enter new task</label>
                <div className="input-group mb-4">
                  <input type="text" className="form-control" id="input-task-description" placeholder="Example: Do a barrelroll!"/>
                  <button className="btn btn-success">Add</button>
                </div>
              </form>

              <section id="task-list">

                <table className="table table-hover table-borderless">
                  <tbody>

                    <tr className="align-middle">
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label htmlFor="" className="form-check-label">Task 1</label>
                          <button className="btn btn-sm btn-outline-secondary float-end invisible"><i className="far fa-times-circle"></i></button>
                        </div>
                      </td>
                    </tr>

                    <tr className="align-middle">
                      <td>
                        <div className="input-group input-group-sm mb3">
                          <input type="text" className="form-control"/>
                        </div>
                      </td>
                    </tr>

                    <tr className="align-middle">
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label htmlFor="" className="form-check-label">Task 3</label>
                          <button className="btn btn-sm btn-outline-secondary float-end invisible"><i className="far fa-times-circle"></i></button>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </section>

            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>


    {/* End of App <div> */}
    </div>
  );
}

export default App;
