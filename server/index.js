const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'hana' && password === '123456') {
    res.status(200).send({
      code: 0,
      token: '654321'
    })
  } else {
    res.status(401).send({
      code: 1,
      value: 'login fail'
    })
  }
})

app.post('/api/logout', (req, res) => {
  res.status(200).send({
    code: 0,
    value: 'logout success'
  })
})

app.listen(port, () => console.log(`backend is listening on port ${port}!`))
