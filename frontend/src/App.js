import React, { useState } from 'react';
import NavBar from './components/NavBar';
import InputForm from './components/Inputform';
import MonitorCard from './components/MonitorCard';
import LeftPanel from './components/LeftPanel';

function App() {
  const [selectedMonitor, setSelectedMonitor] = useState(null);
  const [monitorFields, setMonitorFields] = useState([]);

  const handleMonitorSelect = (monitor) => {
    setSelectedMonitor(monitor);
  };

  const handleAddMonitorField = (monitor) => {
    setMonitorFields((prevFields) => [...prevFields, monitor]);
  };

  const handleMonitorFieldClick = (monitor) => {
    setSelectedMonitor(monitor);
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
