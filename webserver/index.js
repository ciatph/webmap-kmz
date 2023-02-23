const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001
const app = express()

// This webserver requires the "dist" directory
// npm run client:build

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '..', 'dist', 'public')))

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the Web Map server')
})

app.listen(PORT, () => {
  console.log(`Web server\nlistening on http://localhost:${PORT}`)
})
