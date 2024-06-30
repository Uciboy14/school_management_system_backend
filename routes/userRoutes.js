const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, deleteUserProfile, getAllUsers } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

// Route to get the profile of the logged-in user
router.route('/me').get(protect, getUserProfile);

// Route to update the profile of the logged-in user
router.route('/me').update(protect, updateUserProfile);

// Route to delete the profile of the logged-in user
router.route('/me').delete(protect, deleteUserProfile);

// Route to get all users (admin only)
router.route('/').get(protect, authorize('admin'), getAllUsers);

