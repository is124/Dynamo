const https = require('https');
const http = require('http');

const checkAvailabilityAndResponseTime = (url) => {
  const startTime = Date.now();

  const protocol = url.startsWith('https://') ? https : http;

  protocol
    .get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      console.log(`Website is available. Response Time: ${responseTime} ms`);
      checkSSLStatus(url);
    })
    .on('error', (error) => {
      console.error('Website is not available:', error.message);
    });
};

const checkSSLStatus = (url) => {
  const hostname = new URL(url).hostname;

  const requestOptions = {
    hostname: hostname,
    port: 443,
    method: 'HEAD',
  };

  const req = https.request(requestOptions, (res) => {
    const certificate = res.socket.getPeerCertificate();
    if (!certificate || Object.keys(certificate).length === 0) {
      console.log('No SSL certificate found for the website.');
    } else {
      console.log('SSL Certificate Details:');
      console.log('  - Valid From: ', certificate.valid_from);
      console.log('  - Valid To: ', certificate.valid_to);
      console.log('  - Issuer: ', certificate.issuer.CN);
    }
  });

  req.on('error', (error) => {
    console.error('Error checking SSL certificate:', error.message);
  });

  req.end();
};

const checkNumberOfRequests = (url) => {
  http
    .get(url, (res) => {
      let numberOfRequests = 1;
      res.on('data', () => {
        numberOfRequests++;
      });

      res.on('end', () => {
        console.log(`Number of HTTP Requests: ${numberOfRequests}`);
        checkCacheUsage(url);
      });
    })
    .on('error', (error) => {
      console.error('Error fetching the number of requests:', error.message);
    });
};

const checkCacheUsage = (url) => {
    const protocol = url.startsWith('https://') ? https : http;
  
    protocol
      .request(url, { method: 'HEAD' }, (res) => {
        const cacheControlHeader = res.headers['cache-control'];
        const etagHeader = res.headers['etag'];
  
        if (cacheControlHeader || etagHeader) {
          console.log('Website utilizes caching for static assets. Cache usage is good.');
        } else {
          console.log('Website may benefit from implementing caching for static assets.');
        }
      })
      .on('error', (error) => {
        console.error('Error checking cache usage:', error.message);
      })
      .end();
  };

module.exports = {
  checkAvailabilityAndResponseTime,
  checkSSLStatus,
  checkNumberOfRequests,
  checkCacheUsage,
};
