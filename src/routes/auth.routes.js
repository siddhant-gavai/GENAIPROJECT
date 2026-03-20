/**
 * @module routes/auth
 * @description Authentication routes for handling user registration, login, logout, and profile retrieval.
 */
const express = require("express");
const { 
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile 
} = require("../controllers/auth.controller");

const authRouter = express.Router();

/**
 * @route POST /register
 * @description Register a new user
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body
 * @param {string} req.body.username - User's username
 * @param {string} req.body.email - User's email address
 * @param {string} req.body.password - User's password
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with success message and user details
 */
authRouter.post("/register", registerUser);

/**
 * @route POST /login
 * @description Authenticate user and get token
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body
 * @param {string} req.body.email - User's email address
 * @param {string} req.body.password - User's password
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with success message, JWT token, and user details
 */
authRouter.post("/login", loginUser);

/**
 * @route POST /logout
 * @description Logout user and clear token cookie
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with success message
 */
authRouter.post("/logout", logoutUser);

/**
 * @route GET /profile
 * @description Get current user's profile using JWT token
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with user profile object
 */
authRouter.get("/profile", getUserProfile);

module.exports = authRouter;