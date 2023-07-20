import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import MonitorCard from "./MonitorCard.jsx";
import axios from 'axios';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [monitorList, setMonitorList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      const newMonitor = { url: inputValue };

      try{

        const response = await axios.post('http://localhost:8081/v1/add', newMonitor);
        console.log(response);
        
        if(response.data.isSuccess){
          setMonitorList((prevList) => [...prevList, newMonitor]);
        }

        setInputValue('');
      }catch(err){
        console.error('Error submitting data:', err);
      }
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'baseline' }}>
        <TextField
          label="Enter URL"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          size="small"
          style={{ width: 500, marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit" disabled={!inputValue}>
          + Monitor
        </Button>
      </form>
      {monitorList.map((monitor, index) => (
        <MonitorCard key={index} url={monitor.url} />
      ))}
    </div>
  );
};

export default InputForm;
