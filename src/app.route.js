import express from 'express'
import ProductRouter from './modules/product/product.route.js'
import UserRouter from './modules/user/user.route.js'
import CustomerRouter from './modules/customer/customer.router.js'

const AppRouter = express()

AppRouter.use('/api/product', ProductRouter)
AppRouter.use('/api/user', UserRouter)
AppRouter.use('/api/customer', CustomerRouter)
export default AppRouter