import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader, { BallTriangle, RotatingLines } from 'react-loader-spinner';
// import './style.css';
const url = 'https://649d55d99bac4a8e669d9791.mockapi.io/api/users';
export default function Registration() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res: any) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3 mb-3 align-items-center justify-content-between">
          <div className="col-6">
            <h3>Registration Page</h3>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              onClick={() => navigate('/')}
              className="btn btn-primary default"
            >
              Login
            </button>
          </div>
          <hr />
        </div>
        <div className="row mb-3">
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td className="text-center" colSpan={5}>
                        <RotatingLines
                          strokeColor="grey"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="96"
                          visible={true}
                        />
                      </td>
                    </tr>
                  ) : (
                    data.map((item, index) => {
                      return (
                        <tr key={index + 1}>
                          <td>{index + 1}</td>
                          <td>{item?.name}</td>
                          <td>{item?.email}</td>
                          <td>{item?.mobile}</td>
                          <td>{item?.age}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
