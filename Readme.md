This project provides a REST API for managing course data, built using Node.js, Express, and MongoDB. It's set up with a testing environment using Mocha and Chai to ensure the functionality of all endpoints.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
To run this project, you will need Node.js and npm installed on your computer. The project uses MongoDB as a database, which requires an active MongoDB connection.

1. Open the project in VS Code
2. Install the required dependencies: npm install

## Configuration

DATABASE_URI = mongodb+srv://alexandrastraton1:StrAle2024@cluster0.vomctjz.mongodb.net/test
DATABASE_URI = mongodb+srv://alexandrastraton1:StrAle2024@cluster0.vomctjz.mongodb.net/test
Before running the application or tests, configure the environment variables.
cp .env.example .env
cp .env.example .env.test
cp .env.example .env.dev

## Running the Application

To start the server, use the following npm command: npm run dev

## Testing the API

Tests are written using Mocha and Chai and are located in the test directory.

## Running Tests

To execute all tests, run: npm test

This command sets the NODE_ENV to test, ensuring that the tests run in the testing environment, and starts Mocha to execute the test scripts.

## API Endpoints

Below are the main endpoints of the API:

GET /api/courses: Fetches all courses.

POST /api/courses: Creates a new course with provided JSON payload.

DELETE /api/courses/:id: Deletes the course with the specified ID
