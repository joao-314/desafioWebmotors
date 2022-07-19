const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl:"https://desafioonline.webmotors.com.br/api/OnlineChallenge/"
    },
  },
});
