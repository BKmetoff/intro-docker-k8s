const express = require('express')

const app = express()

app.get('/', (req, res) => {
	console.log('serving index.html')
	res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>an update here</p>
    <p>this is version 3</p>
    <p>this is an updated version 3</p>
    <p>Try sending a request to /error and see what happens</p>
  `)
})

app.get('/error', (req, res) => {
	console.log('k bye')
	res.send('OK', 200)
	process.exit(1)
})

app.listen(8080)
