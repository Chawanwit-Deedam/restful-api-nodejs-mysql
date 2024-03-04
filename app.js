import express from "express";
import AppRouter from "./src/app.route.js";
import AppMiddleware from "./src/app.middleware.js";
import AppConfig from './src/app.config.js'
import serverless from 'serverless-http'

const app = express()

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (req, res) => {
     res.status(500).send('welcome api server')
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log( `SERVER IS RUNNING ON PORT ${PORT}` )
})

// export default handler = serverless(app)