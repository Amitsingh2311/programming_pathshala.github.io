const express = require('express');
const reviewRouter = express.Router();
const reviewController = require('../controllers/reviewsControllers.js');


reviewRouter.route('/')
    .get(reviewController.getAllreview)
    .post(reviewController.addreview)

reviewRouter.route('/:id')    
    .put(reviewController.replacereview)
    .delete(reviewController.deletereview);

module.exports = reviewRouter;












