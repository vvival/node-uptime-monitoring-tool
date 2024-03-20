# node-uptime-monitoring-tool

A simple Node.js tool for monitoring the uptime of websites or APIs.

## Setup

Clone the repository and run `npm install` to install dependencies.

## Configuration

Create a `config.json` file in the root directory with the following structure:

```json
{
"urls": [
"http://example.com",
"http://anotherexample.com"
],
"checkInterval": 60000
}
```

- `urls` is an array of URLs you want to monitor.
- `checkInterval` is the time interval between checks in milliseconds.

## Usage

Run the tool with `node index.js`. The tool will periodically check the uptime of each URL and log the results to the console.

## License

This project is licensed under the MIT License.
