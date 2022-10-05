module.exports = {
  // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.
  testConcurrency: 5,

  // To connect visual test results to your account,
  // you must set the `APPLITOOLS_API_KEY` environment variable to your Applitools API key.
  // To find it: https://applitools.com/tutorials/getting-started/setting-up-your-environment.html
  // If you don't explicitly set the API key here,
  // then the SDK will automatically read the `APPLITOOLS_API_KEY` environment variable to fetch it.
  apiKey: "Your API Key",
  appName: "Visual Tests",

  batchName: "Map Tests",
  browser: [
    { width: 800, height: 600, name: "chrome" },
    { width: 1600, height: 1200, name: "firefox" },
    { width: 1024, height: 768, name: "safari" },
    { width: 1366, height: 768, name: "chrome" },
  ],
};
