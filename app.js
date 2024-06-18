// Import the express module
const express = require('express')

// Create an instance of express
const app = express()

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Define the host and port
const HOST = "localhost"
const PORT = 3000

// Error handler middleware
function errorHandler(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    res.send("Страница не найдена")
}

// Define a route for the root URL
app.get('/', (req, res, next) =>{
    res.send("Hello world!")
})

// Define a route for the /about URL
app.get('/about', (req, res, next) => {
    res.send('Это простое приложение на Express.js')
})

// Use the error handler middleware
app.use(errorHandler)

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`server is running: http://${HOST}:${PORT}`)
})