const express = require('express');
const router = express.Router();
const { register, login, resetPassword } = require('../controllers/authController');
