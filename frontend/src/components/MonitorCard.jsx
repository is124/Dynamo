import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const MonitorCard = ({ url }) => {
  const calculateValues = () => {
    // Perform calculations to get the values based on the URL
    // Replace the hardcoded values with your actual calculations

    const availability = 'High'; // Example: calculateAvailability(url);
    const responseTime = 'Fast'; // Example: calculateResponseTime(url);
    const sslCertificate = 'Valid'; // Example: calculateSSL(url);
    const errorLogging = 'Enabled'; // Example: calculateErrorLogging(url);
    const resourceUsage = 'Low'; // Example: calculateResourceUsage(url);

    return {
      Availability: availability,
      'Response Time': responseTime,
      'SSL Certificate': sslCertificate,
      'Error Logging': errorLogging,
      'Resource Usage': resourceUsage,
    };
  };

  const calculatedValues = calculateValues();

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', marginTop: '10px' }}>
      {url!=null ? 
        <Card style={{ width: '850px', boxShadow: 'none', border: '1px solid #333' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3} style={{ borderRight: '1px solid #e0e0e0', overflowX:'hidden'}}>
              <Typography variant="body1" gutterBottom>
                <b>Site Name:</b> {url}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <b>Site Owner:</b> {url}
              </Typography>
            </Grid>
            <Grid item xs={9} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
              <div>
                {Object.entries(calculatedValues).slice(0, 3).map(([key, value], index) => (
                  <Typography variant="body1" gutterBottom key={index}>
                    <b>{key}:</b> {value}
                  </Typography>
                ))}
              </div>
              <div>
                {Object.entries(calculatedValues).slice(3).map(([key, value], index) => (
                  <Typography variant="body1" gutterBottom key={index}>
                    <b>{key}:</b> {value}
                  </Typography>
                ))}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
        : ""
    }
    </div>
  );
};

export default MonitorCard;
