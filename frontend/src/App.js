import React, { useState, useEffect } from 'react'; 
import './App.css';


function App() {

  const [location, setLocation] = useState("");
  const [full_location, setFullLocation] = useState(""); 
  const [condition, setCondition] = useState("");
  const [searched, setSearched] = useState(false); 
  const [background, setBackground] = useState("../images/partly-cloudy.jpg");





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
          const result = await response.json(); 

          console.log(result); 

          const [resFullLocation, resCondition] = result;
          setFullLocation(resFullLocation); 
          setCondition(resCondition); 

          // Adjust background based on condition
          const lower = resCondition.toLowerCase(); 
          // if (condition.includes("sunny"))
          // if (lower.includes("partly cloudy")) { setBackground('../images/partly-cloudy.jpg'); };
        }
      };
      getCondition(); 

       
    }

  }, [searched, location]); 



  return (
    <div 
      className="App" 
      style={{
        backgroundImage: new URL(background),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >

      <h1>Get weather in your location</h1>

      <form onSubmit={HandleSubmit}> 
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
          // onClick={HandleSubmit} - can only click "Submit" button, can't also press "Enter"
          >
          Submit
        </button>
      </form>

      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '6px',
          width: 'fit-content',
          margin: '20px auto',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
        }}
      >
        <p style={{ backgroundColor:"white", width:"300px" }}>Location: {full_location} </p>
        <p>Condition: {condition} </p>
      </div>

    </div>
  );
}

export default App;
