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

  const getWebName = (url) => {
      const trimmedURL = url.replace(/^(https?:\/\/)/i, '');
      const domainName = trimmedURL.split('/')[0]; 
      const domainWithoutWWW = domainName.replace(/^www\./i, '');

      const websiteName = domainWithoutWWW.split('.')[0];
      const capitalizedWebsiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1);

      return capitalizedWebsiteName;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue) {
        const webUrl = { url: inputValue };
        const webName = getWebName(inputValue);
        const monitor = {
          name: webName,
          url: inputValue,
        };
      
      try{
        onMonitorFieldAdd(monitor); // adds to left panel

        // const response = await axios.post('http://localhost:8081/v1/operation/add', webUrl);

        // if(response.data.isSuccess){
        //   toast.success(response.data.message, {
        //     position: 'top-right',
        //     autoClose: 2000,
        //     hideProgressBar: true,
        //     theme: "colored",
        //   });
        // }

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
