const express = require('express')

const app = express()

app.use(express.json())

PORT = 4324
app.listen(PORT, () => console.log(`listening on port ${PORT}`))