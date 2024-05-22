import 'reflect-metadata'
import express from 'express'
import routes from './config/routes'
const app = express()

app.listen(3000, () => {
  console.log('Running on port 3000! 🚀 🚀')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(routes)
