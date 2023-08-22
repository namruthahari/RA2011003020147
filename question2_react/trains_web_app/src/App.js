import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://48e6492d-3b6c-4f4d-9b4b-6d4560a5311c.mock.pstmn.io/train1";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Available Train Schedule</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.trainName}</p>
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.trainNumber}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;