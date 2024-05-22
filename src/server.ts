import 'reflect-metadata'
import express from 'express'
import routes from './config/routes'
import { json } from 'express'
import './shared/container'
import http from 'http'
const app = express()
const server = http.createServer(app)
app.use(json())
server.listen(3000, () => {
  console.log('Running on port 3000! 🚀 🚀')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(routes)
