import React, { useState } from 'react';
import NavBar from './components/NavBar';
import InputForm from "./components/Inputform";
import MonitorCard from './components/MonitorCard';
import LeftSidePanel from './components/LeftPanel';

function App() {
  const [selectedMonitor, setSelectedMonitor] = useState(null);
  const [monitorFields, setMonitorFields] = useState([]);

  const handleMonitorSelect = (monitor) => {
    setSelectedMonitor(monitor);
  };

  const handleAddMonitorField = (fieldName) => {
    setMonitorFields((prevFields) => [...prevFields, fieldName]);
  };

  const handleMonitorFieldClick = (fieldName) => {
    setSelectedMonitor(fieldName);
  };

  return (
    <div>
      <NavBar />
      
      <div style={{ display: 'flex' }}>
        <div>
          <LeftSidePanel monitorFields={monitorFields} onMonitorFieldClick={handleMonitorFieldClick} />
        </div>
        <div>
          <InputForm onMonitorAdd={handleMonitorSelect} onMonitorFieldAdd={handleAddMonitorField} />
          <MonitorCard monitor={selectedMonitor} />
        </div>
      </div>
    </div>
  );
}

export default App;
