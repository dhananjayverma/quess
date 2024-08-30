# Quiz Application API

This README provides a detailed guide for the Quiz Application API, built using Node.js, Express.js, and MongoDB. This API allows users to create and participate in timed quizzes, retrieve active quizzes, get quiz results, and fetch all quizzes.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Create Quiz](#create-quiz)
  - [Get Active Quiz](#get-active-quiz)
  - [Get Quiz Result](#get-quiz-result)
  - [Get All Quizzes](#get-all-quizzes)
- [Running the Server](#running-the-server)
- [Testing with Postman](#testing-with-postman)
- [Troubleshooting](#troubleshooting)


## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-repository-folder>
```

## Set up MongoDB

- Ensure you have MongoDB installed and running locally or use a cloud MongoDB service like MongoDB Atlas.
- Update the `MONGO_URI` in `.env` with your MongoDB connection string.

## Configuration

- **MongoDB**: The application uses MongoDB for data storage.
- **JWT_SECRET**: Used for generating and verifying JSON Web Tokens.
- **PORT**: The port on which the server will run.


## Testing with Postman

### Create Quiz

- **Method**: POST
- **URL**: `http://localhost:5000/api/v1/quizzes`
- **Body**: JSON as shown in the [Create Quiz](#create-quiz) section.
- **Authorization**: Use Bearer Token if applicable.

### Get Active Quiz

- **Method**: GET
- **URL**: `http://localhost:5000/api/v1/quizzes/active`
- **Authorization**: Use Bearer Token if applicable.

### Get Quiz Result

- **Method**: GET
- **URL**: `http://localhost:5000/api/v1/quizzes/{id}/result`
- **Authorization**: Use Bearer Token if applicable.

### Get All Quizzes

- **Method**: GET
- **URL**: `http://localhost:5000/api/v1/quizzes/all`
- **Authorization**: Use Bearer Token if applicable.

## Troubleshooting

- **Invalid Token**: Ensure your JWT token is correctly set in Postman.
- **No Active Quiz Found**: Verify there is a quiz within the active time range.
- **Result Not Available**: Check if 5 minutes have passed since the quiz end time.



## API Endpoints



### User Registration

- **Method**: `POST`
- **URL**: `/api/v1/users/register`

**Body (JSON):**

```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

### User Login

- **Method**: POST
- **URL**: `/api/v1/users/login`

**Body (JSON):**

```json
{
  "username": "exampleUser",
  "password": "examplePassword"
}
```



### Create Quiz

- **Method**: POST
- **URL**: `/api/v1/quizzes`

**Body (JSON):**

```json
{
  "question": "What is the capital of France?",
  "options": ["Berlin", "Madrid", "Paris", "Rome"],
  "rightAnswer": 2,
  "startDate": "2024-09-01T10:00:00Z",
  "endDate": "2024-09-01T10:05:00Z"
}
```


### Get Quiz Result

- **Method**: GET
- **URL**: `/api/v1/quizzes/{id}/result`
  - Replace `{id}` with the quiz's ID
- **Authorization**: Bearer Token (if authentication is required)

**Response (JSON):**

```json
{
  "success": true,
  "data": {
    "_id": "quiz_id",
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "rightAnswer": 2,
    "startDate": "2024-09-01T10:00:00Z",
    "endDate": "2024-09-01T10:05:00Z",
    "status": "completed",
    "results": {
      "totalAttempts": 100,
      "correctAnswers": 75
    }
  }
}
```

### Get All Quizzes

- **Method**: GET
- **URL**: `/api/v1/quizzes/all`
- **Authorization**: Bearer Token (if authentication is required)

**Response (JSON):**

```json
{
  "success": true,
  "data": [
    {
      "_id": "quiz_id",
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "rightAnswer": 2,
      "startDate": "2024-09-01T10:00:00Z",
      "endDate": "2024-09-01T10:05:00Z",
      "status": "inactive"
    }
    // More quizzes...
  ]
}
```

#### deploy link :- https://quess95.onrender.com/api/v1/quizzes/active
