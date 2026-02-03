import React, { useEffect, useState } from 'react';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespace
  ? `https://${codespace}-8000.app.github.dev/api/teams/`
  : '/api/teams/';

function Teams() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('Fetching teams from', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched teams:', results);
      })
      .catch(e => console.error('Error fetching teams:', e));
  }, []);
  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="mb-0">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((t, i) => (
              <tr key={i}>
                <td>{t.name}</td>
                <td>{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Teams;
