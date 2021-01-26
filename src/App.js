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
          <div className="input-group mb3">
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
                    <button className="btn btn-outline-secondary"><i class="fas fa-edit"></i></button>
                    <button className="btn btn-primary"><i class="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
              </td>
            </tr>


            <tr>
              <td>
                <div className="input-group input-group-sm mb3">
                  <input type="text" className="form-control" value="Jorge Palacios"/>
                  <button className="btn btn-outline-secondary"><i class="far fa-times-circle"></i></button>
                  <button className="btn btn-success"><i class="fas fa-check"></i></button>
                </div>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm invisible">
                    <button className="btn btn-outline-primary"><i class="fas fa-edit"></i></button>
                    <button className="btn btn-danger"><i class="fas fa-trash"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger invisible"><i class="fas fa-trash"></i></button>
              </td>
            </tr>


            <tr className="align-middle">
              <td>
                <span className="align-middle">Meowth Rocket</span>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary"><i class="fas fa-edit"></i></button>
                    <button className="btn btn-primary"><i class="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
              </td>
            </tr>

            <tr className="align-middle">
              <td>
                <span className="align-middle">Boss Rocket</span>
              </td>
              <td className="mx-auto">
                <div className="text-center">
                  <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary"><i class="fas fa-edit"></i></button>
                    <button className="btn btn-primary"><i class="fas fa-tasks"></i></button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
              </td>
            </tr>


          </tbody>
        </table>
      </section>

    </div>
  );
}

export default App;
