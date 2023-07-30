import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const MonitorCard = ({ monitor }) => {
  const [calculatedValues, setCalculatedValues] = useState({
    'Availability': '',
    'Response Time': '',
    'SSL Certificate': '',
    'Error Logging': '',
    'Resource Usage': '',
  });

  const fetchCalculatedValues = async () => {
    try {
      // const response = await axios.post('https://example-api.com/api/calculate', { name: monitor.name });
      // const { availability, responseTime, sslCert, errorLogg, Usage } = response.data;

      // setCalculatedValues({
      //   'Availability': availability,
      //   'Response Time': responseTime,
      //   'SSL Certificate': sslCert,
      //   'Error Logging': errorLogg,
      //   'Resource Usage': Usage,
      // });
    } catch (error) {
      console.error('Error fetching calculated values:', error);
    }
  };

  useEffect(() => {
    fetchCalculatedValues();
  }, [monitor]);

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', marginTop: '10px' }}>
      {monitor ? (
        <Card style={{ width: '850px', boxShadow: 'none', border: '1px solid #333' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3} style={{ borderRight: '1px solid #e0e0e0', overflowX: 'hidden' }}>
                <Typography variant="body1" gutterBottom>
                  <b>Site Name:</b> {monitor.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Site URL:</b> {monitor.url}
                </Typography>
              </Grid>
              <Grid item xs={9} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                <div>
                  {Object.entries(calculatedValues).map(([key, value], index) => (
                    <Typography variant="body1" gutterBottom key={index}>
                      <b>{key}:</b> {value}
                    </Typography>
                  ))}
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MonitorCard;
