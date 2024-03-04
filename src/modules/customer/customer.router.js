import express from "express";
import CustomerController from "./controllers/customer.controller.js";

const CustomerRouter = express.Router()

CustomerRouter.get('/', CustomerController.getAllCustomer)
CustomerRouter.post('/', CustomerController.addCustomer)
CustomerRouter.post('/login', CustomerController.loginCustomer)

export default CustomerRouter