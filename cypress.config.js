const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

require("@applitools/eyes-cypress")(module);
