const path = require('path')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3002
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the KMZ server')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`KMZ server\nlistening on http://localhost:${PORT}`)
})
