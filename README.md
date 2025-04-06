# Tech Quiz Application

## Description

The **Tech Quiz Application** is a web-based quiz platform built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to take a tech quiz, answer questions, and view their final score. This project also incorporates automated testing using **Cypress** to ensure the app functions as expected.

The quiz consists of ten random questions, which the user can answer sequentially. At the end of the quiz, the user is presented with their score and the option to take a new quiz.

This project demonstrates full-stack web development, including API integration, front-end React components, and comprehensive testing with Cypress.

## Features

- **Randomized Questions**: Users are presented with random quiz questions pulled from the server.
- **Answering Mechanism**: Users can select answers and move to the next question.
- **Score Display**: After completing the quiz, users can view their score.
- **Start a New Quiz**: Users can restart the quiz and answer a new set of questions.
- **Testing with Cypress**: Both component and end-to-end tests are created to ensure functionality.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Cypress (for component and end-to-end testing)

## Installation

### Prerequisites

- **Node.js** and **npm** installed. If you don't have these, you can download them from the [official Node.js website](https://nodejs.org/).
- **MongoDB** installed locally or using a cloud-based solution (e.g., MongoDB Atlas).

### Setup Instructions

1. **Clone the repository**:
   git clone https://github.com/yourusername/tech-quiz-app.git
   cd tech-quiz-app
Install dependencies for both client and server:
For the client (React):
cd client
npm install
For the server (Node.js/Express):
cd server
npm install
Set up environment variables:
Rename the .env.example file in the server directory to .env and provide the necessary environment variables (e.g., MongoDB URI).
Start the server:
cd server
npm start
Start the client:
In a separate terminal, run:

cd client
npm start
Visit the app: Open your browser and navigate to http://localhost:3000 to access the quiz application.
Running Tests

Cypress tests are included in the project to ensure everything works as expected. To run the tests:

Install Cypress as a dev dependency:
npm install cypress --save-dev
Run the tests:
npm run test
This will run both component and end-to-end tests. Cypress will automatically open a browser window for you to watch the tests run.

This project includes two types of Cypress tests:

Component Tests: These tests ensure that individual components, such as the Quiz component, function correctly.
End-to-End (E2E) Tests: These tests simulate user interaction with the application and ensure the entire quiz process works from start to finish.
To run the Cypress tests:

Run component tests:
Run npm run test:component to execute component tests located in cypress/component/Quiz.cy.jsx.
Run end-to-end tests:
Run npm run test:e2e to execute end-to-end tests located in cypress/e2e/quiz.cy.js.
Example Tests
Component Test: Verifies if the Quiz component displays the correct question and responds to user inputs.
End-to-End Test: Simulates the entire quiz-taking process, including starting the quiz, answering questions, and checking the score at the end.
Video Submission

https://drive.google.com/file/d/1rkb0tGlPiouCM-AtWI5EmhI_RXWlmDoh/view?usp=sharing

License

MIT License. See LICENSE for more information.