
// Workouts component: fetches and displays workout data from the REST API backend.
// Uses codespace environment variable to build the correct API endpoint.
// Logs the endpoint and fetched data for debugging.
import React, { useEffect, useState } from 'react';

// Dynamically build the API endpoint based on codespace environment.
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespace
  ? `https://${codespace}-8000.app.github.dev/api/workouts/`
  : '/api/workouts/';

function Workouts() {
  // State for workout data (array of workouts)
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch workouts from REST API on mount
    // Handles both paginated (.results) and plain array responses
    console.log('Fetching workouts from', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched workouts:', results);
      })
      .catch(e => console.error('Error fetching workouts:', e));
  }, []);
  return (
    // Render workouts in a Bootstrap-styled table
    // Table shows name and description for each workout
    <div className="card mb-4">
      <div className="card-header bg-danger text-white">
        <h2 className="mb-0">Workouts</h2>
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
            {data.map((w, i) => (
              <tr key={i}>
                <td>{w.name}</td>
                <td>{w.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Workouts;
