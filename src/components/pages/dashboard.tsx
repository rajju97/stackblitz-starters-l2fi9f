import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './style.css';

export default function Dashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { _id } = state;
  const [user, setUser] = React.useState({ name: '', email: '' });
  React.useEffect(() => {
    fetch(`https://649d55d99bac4a8e669d9791.mockapi.io/api/add_user?_id=${_id}`)
      .then((res: any) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUser(result[0]);
      });
  }, []);
  const handleLogOut = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <span>
        <button onClick={handleLogOut} className="btn btn-secondary">
          LogOut
        </button>
      </span>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="card">
            <div className="card-body">
              {user && (
                <ul>
                  <li>User Name: {user?.name}</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
