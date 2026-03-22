# GENAI Project

A Node.js backend application with Express and MongoDB, featuring user authentication.

## Application Features
- User Authentication (Register, Login, Logout, Profile)
- JWT based authentication with secure cookies
- MongoDB integration with Mongoose
- Environment variables configured

## Requirements
- Node.js
- MongoDB URI

## Scripts

### `npm run dev`
Starts the server using nodemon for automatic reloads on changes.

### `npm start`
Starts the server normally for production-like environments.

## Environment Variables
Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```
