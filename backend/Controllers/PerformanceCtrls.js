const axios = require('axios');
const https = require('https');
const { performance } = require('perf_hooks');
const puppeteer = require('puppeteer');

const CheckWebsite = async (req, res) => {
  try {
    let URL = req.body.url;

    if (!URL.startsWith('http://') && !URL.startsWith('https://')) {
      URL = `https://${URL}`;
    }

    const agent = new https.Agent({ rejectUnauthorized: false });
    
    const start = performance.now();
    const response = await axios.get(URL, { httpsAgent: agent });
    const end = performance.now();
    const responseTime = end - start;

    
    const statusCode = response.status;

    
    const availability = statusCode >= 200 && statusCode < 300;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urlToCheck = URL;

    await page.goto(urlToCheck);

    const metrics = await page.metrics();
    const performanceTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.timing)));

    const loadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;
    const firstContentfulPaint = metrics['FirstContentfulPaint'];
    const domContentLoaded = metrics['DomContentLoadedEventEnd'];
    const serverResponseTime = performanceTiming.responseStart - performanceTiming.requestStart;

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

    await browser.close();

    const parameters = {
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
    }

    res.json({data: parameters});


  } catch (err) {
    console.log("Error :: ", err);
    res.status(500).send("An error occurred");
  }
};


module.exports = { 
  CheckWebsite,
};
