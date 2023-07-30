const axios = require('axios');
const https = require('https');
const { performance } = require('perf_hooks');
const puppeteer = require('puppeteer');

const CheckWebsite = async (req, res) => {
  try {
    let URL = req.body.url;

    // Check if the URL starts with "http://" or "https://"
    if (!URL.startsWith('http://') && !URL.startsWith('https://')) {
      URL = `https://${URL}`;
    }

    // BasicCheck - using Axios
    const agent = new https.Agent({ rejectUnauthorized: false });

    // Measure response time using performance.now()
    const start = performance.now();
    const response = await axios.get(URL, { httpsAgent: agent });
    const end = performance.now();
    const responseTime = end - start;

    // Extract status code
    const statusCode = response.status;

    // Check availability based on status code
    const availability = statusCode >= 200 && statusCode < 300;

    // AdvancedCheck - using Puppeteer
    // Launch Puppeteer and navigate to the URL
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urlToCheck = URL;

    await page.goto(urlToCheck);

    // Measure performance metrics using Puppeteer's built-in methods
    const metrics = await page.metrics();
    const performanceTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));

    // Extract the necessary performance data
    const loadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;
    const firstContentfulPaint = metrics['FirstContentfulPaint'];
    const domContentLoaded = metrics['DomContentLoadedEventEnd'];
    const serverResponseTime = performanceTiming.responseStart - performanceTiming.requestStart;

    // Get SSL certificate information using Puppeteer's page.evaluate()
    const sslCertificate = await page.evaluate(() => {
      const certificate = Array.from(document.querySelectorAll('script'))
        .find(script => script.textContent.includes('var ssl = '));
      
      if (certificate) {
        const start = certificate.textContent.indexOf('var ssl = ') + 'var ssl = '.length;
        const end = certificate.textContent.indexOf('};', start) + 1;
        const sslInfo = certificate.textContent.slice(start, end);
        return JSON.parse(sslInfo);
      }
      
      return null;
    });

    // Close the browser
    await browser.close();

    // Send the extracted data back to the client
    res.send({
      basicCheck: {
        availability,
        responseTime,
      },
      advancedCheck: {
        loadTime,
        firstContentfulPaint,
        domContentLoaded,
        serverResponseTime,
        sslCertificate,
      },
    });
  } catch (err) {
    console.log("Error :: ", err);
    res.status(500).send("An error occurred");
  }
};


module.exports = { 
  CheckWebsite,
};
