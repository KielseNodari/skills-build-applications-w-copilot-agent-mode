import React, { useEffect, useState } from 'react';

const codespace = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespace
  ? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
  : '/api/leaderboard/';

function Leaderboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('Fetching leaderboard from', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched leaderboard:', results);
      })
      .catch(e => console.error('Error fetching leaderboard:', e));
  }, []);
  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((l, i) => (
              <tr key={i}>
                <td>{l.team && l.team.name}</td>
                <td>{l.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Leaderboard;
