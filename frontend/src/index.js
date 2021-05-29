import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const restEndpoint = "http://localhost:5000";


const callRestAPI = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
}

function RenderResult() {
  const [apiResponse, setAPIResponse] = useState("*** now loading ***");

  useEffect(() => {

    callRestAPI().then(
      result => setAPIResponse(result));

  }, []);

  return(
    <div>
    <h1>React App</h1>
    <p>{apiResponse}</p>
    </div>
  )
}

// callRestAPI(); 

// const myelement = <h1><u>These are the details of the myelment const</u></h1>;
//JSX -> syntatic sugar 

ReactDOM.render(
  <RenderResult/>, 
  document.querySelector('#root')
);



