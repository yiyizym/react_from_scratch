const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'zhu' && password === '123456') {
    res.status(200).send({
      code: 0,
      value: 'login success'
    })
  } else {
    res.status(401).send({
      code: 1,
      value: 'login fail'
    })
  }
})

app.listen(port, () => console.log(`backend is listening on port ${port}!`))
