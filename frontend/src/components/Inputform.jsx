import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';
import MonitorCard from "./MonitorCard.jsx";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';


const InputForm = ({ onMonitorAdd, onMonitorFieldAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      const newMonitor = { url: inputValue };

      try{
        onMonitorAdd(newMonitor);
        onMonitorFieldAdd(newMonitor.url);

        const response = await axios.post('http://localhost:8081/v1/operation/add', newMonitor);

        if(response.data.isSuccess){
          toast.success(response.data.message, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
          });
        }

        setInputValue('');
      }catch(err){
        console.error('Error submitting data:', err);
      }
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
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

      {/* Don't Show on Adding */}
      {/* {monitorList.map((monitor, index) => (
        <MonitorCard key={index} url={monitor.url} />
      ))} */}

    </div>
  );
};

export default InputForm;
