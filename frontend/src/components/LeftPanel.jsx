import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './../styles/LeftSidePanel.css';

const LeftPanel = ({ monitorFields, onMonitorFieldClick }) => {
  return (
    <div className='left-side-panel'>
      {monitorFields.length === 0 ? (
        <div className='empty-message'>
          <p>Add websites to monitor</p>
        </div>
      ) : (
        <ul>
          {monitorFields.map((monitor, index) => (
            <li key={index} className="list-item" onClick={() => onMonitorFieldClick(monitor)}>
              <span>{monitor.name}</span>
              <div className="icon-container">
                <FaEdit className="edit-icon" />
                <FaTrash className="delete-icon" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeftPanel;
