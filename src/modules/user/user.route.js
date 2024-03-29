import express from "express";
import UserController from "./controllers/user.controller.js";

const UserRouter = express.Router()

UserRouter.get('/', UserController.getAllUser)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.post('/', UserController.addUser)
UserRouter.patch('/:id', UserController.updateUser)
UserRouter.delete ('/:id', UserController.deleteUser)

export default UserRouter