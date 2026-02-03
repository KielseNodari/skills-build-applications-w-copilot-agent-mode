
// Activities component: fetches and displays activity data from the REST API backend.
// Uses codespace environment variable to build the correct API endpoint.
// Logs the endpoint and fetched data for debugging.
import React, { useEffect, useState } from 'react';

// Dynamically build the API endpoint based on codespace environment.
const codespace = process.env.REACT_APP_CODESPACE_NAME;
const endpoint = codespace
  ? `https://${codespace}-8000.app.github.dev/api/activities/`
  : '/api/activities/';

function Activities() {
  // State for activity data (array of activities)
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch activities from REST API on mount
    // Handles both paginated (.results) and plain array responses
    console.log('Fetching activities from', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched activities:', results);
      })
      .catch(e => console.error('Error fetching activities:', e));
  }, []);
  return (
    // Render activities in a Bootstrap-styled table
    // Table shows type, duration, and date for each activity
    <div className="card mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((a, i) => (
              <tr key={i}>
                <td>{a.type}</td>
                <td>{a.duration}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Activities;
