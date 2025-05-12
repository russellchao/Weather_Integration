import React, { useState, useEffect } from 'react'; 
import './App.css';

function App() {

  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [searched, setSearched] = useState(false); 



  const HandleSubmit = (event) => {
    if (!searched) {
        event.preventDefault(); // prevents page reload
        setSearched(true); 
    };
  };



  useEffect(() => {
    if (location) {
        const getCondition = async () => {
            if (searched && location) {
                const response = await fetch(`http://localhost:5000/${encodeURIComponent(location)}`)
                setCondition(response); 
            }
        };
        getCondition(); 
    }

  }, [searched, location]); 



  return (
    <div className="App">

      <h1>Get weather in your location</h1>

      <input 
        type="text" 
        placeholder="Enter location..." 
        style={{ marginLeft:"25px", height:"30px", width:"500px" }}
        value={location}
        onChange={(e) => [setLocation(e.target.value), setSearched(false)]}
        >
      </input>

      <button 
        type='submit' 
        style={{ height:"37px", width:"100px", backgroundColor:"#7FFFD4" }}
        onClick={HandleSubmit}
        >
        Submit
      </button>

      <p>Condition: {condition} </p>

    </div>
  );
}

export default App;
