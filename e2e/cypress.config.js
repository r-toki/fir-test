const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {},
  },
  viewportWidth: 1440,
  viewportHeight: 1024,
});
