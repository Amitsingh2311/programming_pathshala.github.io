const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/usersControllers.js');


userRouter.route('/')
    .get(usersController.getAllUser)
    .post(usersController.addUser)

userRouter.route('/:id')    
    .put(usersController.replaceUser)
    .delete(usersController.deleteUser);

module.exports = userRouter;












