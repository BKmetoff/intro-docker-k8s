import express from 'express'

import connectToDatabase from './helpers.mjs'

const app = express()

app.get('/', (req, res) => {
	res.send('<h2>Hi there!</h2>')
})

await connectToDatabase()

// don't listen on 3000 because of BU
app.listen(4000)
