import React, { useState } from 'react';
import NavBar from './components/NavBar';
import InputForm from './components/Inputform';
import MonitorCard from './components/MonitorCard';
import LeftPanel from './components/LeftPanel';
import axios from 'axios';

function App() {
  const [selectedMonitor, setSelectedMonitor] = useState(null);
  const [monitorFields, setMonitorFields] = useState([]);

  const handleMonitorSelect = (monitor) => {
    setSelectedMonitor(monitor);
  };

  const handleAddMonitorField = (monitor) => {
    setMonitorFields((prevFields) => [...prevFields, monitor]);
  };

  const handleMonitorFieldClick = async (monitor) => {
    try {
      const response = await axios.post('http://localhost:8081/v1/analyze/', monitor);
  
      setSelectedMonitor({
        ...monitor,
        calculatedValues: response.data.data,
        name: monitor.name,
      });
    } catch (error) {
      console.error('Error occurred:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };
  

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <LeftPanel monitorFields={monitorFields} onMonitorFieldClick={handleMonitorFieldClick} />
        </div>
        <div style={{ flex: '2', marginRight: '180px', height: 'min-content' }}>
          <InputForm onMonitorAdd={handleMonitorSelect} onMonitorFieldAdd={handleAddMonitorField} />
          <MonitorCard monitor={selectedMonitor} />
        </div>
      </div>
    </div>
  );
}

export default App;
