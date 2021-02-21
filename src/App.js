
import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(props) {

  const Base_url = `https://api.carbonintensity.org.uk/intensity/date/`;
  
  let [carbonIntensity, setCarbonIntensity] = useState([]);
  let [selected, setSelected] = useState();

  let specificCarbonData = carbonIntensity[selected];
 

  const getCarbonData = async () => {
    const response = await fetch(Base_url);
    const data = await response.json();
    setCarbonIntensity(data.data);
  };
 
  useEffect( async () => {
    getCarbonData();
  },[selected]);
 

  const handleClickEvent = (id) => {
    setSelected(id);
    /*
    console.log(selected);
    console.log(specificCarbonData);
    */
   
};

  
  return (
    <React.Fragment>
      <div className = "App">
                <nav className="navbar navbar navbar-dark bg-primary">
                <a className="navbar-brand display-4" href="#">Trilateral Research</a>
                </nav>
               
                <div className="container jumbotron">
                    <h3 className="display-4">Technical Assigment : Carbon Intensity</h3>
                    <p className="lead">This is the simple react app designed to view the Carbon Intensity by fetching the data from API</p>
                <table className="table">
                    <thead> 
                        <tr>
                            <th scope="col">DOUBLE CLICK TO SELECT THE DATES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"><button onClick = {() => {
        handleClickEvent(0); 
    }} className="btn btn-primary">20 Feb 2021</button></td>
                        </tr>
                        <tr>
                            <td scope="row"> <button onClick = {() => {
        handleClickEvent(1); 
    }} className="btn btn-primary">19 Feb 2021</button></td>
                        </tr>
                        <tr>
                            <td scope="row"><button onClick = {() => {
        handleClickEvent(2); 
    }} className="btn btn-primary">18 Feb 2021</button></td>
                        </tr>
                        <tr>
                            <td scope="row"><button onClick = {() => {
        handleClickEvent(3); 
    }} className="btn btn-primary">17 Feb 2021</button></td>
                        </tr>
                        <tr>
                            <td scope="row"><button onClick = {() => {
        handleClickEvent(4); 
    }} className="btn btn-primary">16 Feb 2021</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            <div>
              
                
        {specificCarbonData && Object.keys(specificCarbonData).slice(0,1).map((key, value) => (
          <div id = {key} key={key} value={value} className="Container jumbotron">
          <h1 className="display-4 text-center" >Carbon Intensity Details</h1>
          <table className="table">
            <thead>
              <tr>
                <th className="text-center border">From Date</th>
                <th className="text-center border">To Date</th>
                <th className="text-center border">Intensity Values</th>
              </tr>
            </thead>
            <tbody>
      <tr id = {key} key={key} value={value} >
         <td  className="text-center lead border">{specificCarbonData.from}</td>
         <td  className="text-center lead border">{specificCarbonData.to}</td>
         <td  className="text-center lead border">{Object.keys(specificCarbonData.intensity).map((key, value) => (
             <ul key={key} value={value} className ="border">
                 <li className="text-center lead">{key}:  {specificCarbonData.intensity[key]}</li>
             </ul>
         ))}</td>
      </tr>
      </tbody>
      </table>
      
      </div>

         ))}
           
            </div>
            
            </div>
   
   
    </React.Fragment>
  );
}

export default App;
