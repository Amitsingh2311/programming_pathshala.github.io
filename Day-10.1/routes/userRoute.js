const express = require('express');
const userController = require("../controllers/usersController.js");

const userRouter = express.Router();


userRouter.route('/')
   .get(userController.getUser)
   .post(userController.postUser)
   .delete(userController.dltUser);



   module.exports = userRouter;



