import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import './style.css';
const url = 'https://649d55d99bac4a8e669d9791.mockapi.io/api/users';
export default function Registration() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((res: any) => {
        setData(res);
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
      </div>
    </div>
  );
}
