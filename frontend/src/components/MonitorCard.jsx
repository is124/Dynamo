import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, CircularProgress } from '@material-ui/core';

const MonitorCard = ({ monitor, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [calculatedValues, setCalculatedValues] = useState({});

  useEffect(() => {
    setIsLoading(true);
    if (monitor?.calculatedValues) {
      const { basicCheck, advancedCheck } = monitor.calculatedValues;
      const calculatedValues = {
        'Availability': basicCheck?.availability ? 'Available' : 'Not Available',
        'Response Time': basicCheck?.responseTime ? basicCheck.responseTime.toFixed(2) : '',
        'Load Time': advancedCheck?.loadTime ? `${advancedCheck.loadTime} ms` : '',
        'Server Response Time': advancedCheck?.serverResponseTime ? `${advancedCheck.serverResponseTime} ms` : '',
        'SSL Certificate': advancedCheck?.sslCertificate !== null ? advancedCheck.sslCertificate : 'null',
      };
      setCalculatedValues(calculatedValues);
      setIsLoading(false);
    }
  }, [monitor]);

  const capitalizeAndAddSpace = (str) => {
    return str
      .replace(/([A-Z])/g, ' $1') 
      .replace(/^./, (str) => str.toUpperCase()); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', marginTop: '10px' }}>
      {monitor ? (
        <Card style={{ width: '850px', boxShadow: 'none', border: '1px solid #333' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {monitor.name}
            </Typography>
            <hr style={{ width: '100%', marginBottom: '15px' }} />
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <CircularProgress />
              </div>
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2} direction="column">
                    {Object.entries(calculatedValues).map(([key, value], index) => {
                      if (index < 3) {
                        return (
                          <Grid item key={index}>
                            <Typography variant="body1" gutterBottom>
                              <b>{capitalizeAndAddSpace(key)}:</b> {value !== null ? value : 'null'}
                            </Typography>
                          </Grid>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2} direction="column">
                    {Object.entries(calculatedValues).map(([key, value], index) => {
                      if (index >= 3) {
                        return (
                          <Grid item key={index}>
                            <Typography variant="body1" gutterBottom>
                              <b>{capitalizeAndAddSpace(key)}:</b> {value !== null ? value : 'null'}
                            </Typography>
                          </Grid>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </Grid>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MonitorCard;
