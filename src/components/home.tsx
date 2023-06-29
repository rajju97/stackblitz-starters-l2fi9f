import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Corousal from './pages/corousal';
// import './style.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3 mb-3 align-items-center justify-content-between">
          <div className="col-6">
            <h3>Logistics Solutions Pvt Ltd</h3>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              onClick={() => navigate('/registration')}
              className="btn btn-primary default"
            >
              Registration
            </button>
          </div>
          <hr />
        </div>
        <div className="row mb-3">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col-4 ">
                  <h5 className="text-center">Login Page</h5>
                  <form className="w-90 border border-danger p-3 m-auto form-group">
                    <div className="form-row mb-2">
                      <div className="col-12 form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row mb-2">
                      <div className="col-12 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row mb-2">
                      <div className="col-12 form-group">
                        <label htmlFor="pass">Password</label>
                        <input
                          type="password"
                          name="pass"
                          id="pass"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row align-items-center">
                      <div className="col-12 d-flex justify-content-center form-group">
                        <button className="btn btn-success default">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-8 border border-success">
                  <h5 className="text-center">Latest News</h5>
                  <Corousal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
