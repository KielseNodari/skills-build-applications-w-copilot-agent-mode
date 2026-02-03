
// Users component: fetches and displays user data from the API.
import React, { useEffect, useState } from 'react';

// Dynamically build the API endpoint based on codespace environment.
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespace
  ? `https://${codespace}-8000.app.github.dev/api/users/`
  : '/api/users/';

function Users() {
  // State for user data
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch users from API on mount
    console.log('Fetching users from', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched users:', results);
      })
      .catch(e => console.error('Error fetching users:', e));
  }, []);
  return (
    // Render users in a Bootstrap-styled table
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="mb-0">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.team && u.team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
