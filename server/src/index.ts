import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

import { AppRouter } from './AppRouter'

import './controllers/LoginController'
import './controllers/RouteController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ["sdasgsfs"] }))
app.use(AppRouter.getInstance()) 

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

 