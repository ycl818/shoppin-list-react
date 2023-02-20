import './assets/all.scss'

function App() {
  return (
    <div className="App">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand">甜點蛋糕店</span>
            <button class="btn btn-outline-dark position-relative" type="submit">購物車
              <span 
                class="badge rounded-pill text-bg-danger
                position-absolute top-0 start-100 translate-middle">99</span>
            </button>
        </div>
      </nav>
      <div className='container mt-4'>
        {/* 外層格線 */}
        <div className="row">
          <div className="col-md-7">
           {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
              <div className="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1676872919675-8611c7857dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy set
                    <span className='float-end' >NT220</span>
                  </h5>
                  
                  <button type='button' class="btn btn-outline-primary w-100">Add to Cart</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1676872919675-8611c7857dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy set
                    <span className='float-end' >NT220</span>
                  </h5>
                  
                  <button type='button' class="btn btn-outline-primary w-100">Add to Cart</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1676872919675-8611c7857dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy set
                    <span className='float-end' >NT220</span>
                  </h5>
                  
                  <button type='button' class="btn btn-outline-primary w-100">Add to Cart</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1676872919675-8611c7857dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy set
                    <span className='float-end' >NT220</span>
                  </h5>
                  
                  <button type='button' class="btn btn-outline-primary w-100">Add to Cart</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1676872919675-8611c7857dbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Healthy set
                    <span className='float-end' >NT220</span>
                  </h5>
                  
                  <button type='button' class="btn btn-outline-primary w-100">Add to Cart</button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className='table align-middle'>
                <tbody>
                  <tr>
                    <td>
                      <a href='#'>X</a>
                    </td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>
                      healthy set
                      <br />
                      <small className='text-muted'> NT220</small>
                    </td>
                    <td>
                      <select name="" id="" className='form-select'></select>
                    </td>
                    <td className='text-end'>
                      $440
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">Total: 440</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
