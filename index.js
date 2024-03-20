const http = require('http');
const fs = require('fs');

// Load user configuration
const configPath = './config.json'; // Example path to a configuration file
const { urls, checkInterval } = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Function to check the uptime of a URL
function checkUptime(url) {
  http.get(url, (res) => {
    console.log(`${new Date().toISOString()} - ${url} is up. Status code: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`${new Date().toISOString()} - ${url} is down. Error: ${e.message}`);
  });
}

// Main loop to periodically check each URL
function startMonitoring() {
  urls.forEach(url => {
    // Immediately check uptime on start
    checkUptime(url);

    // Set an interval for subsequent checks
    setInterval(() => checkUptime(url), checkInterval);
  });
}

startMonitoring();
