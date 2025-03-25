// cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',  // For component tests
  },

  e2e: {
    baseUrl: 'http://127.0.0.1:3001',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',  // Make sure this matches your test location
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
