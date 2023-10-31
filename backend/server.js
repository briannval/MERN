require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require("./routes/workouts")

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// connect
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port",process.env.PORT)
        })        
    })
    .catch((error) => {
        console.log(error)
    })


app.get("/", (req,res) => {
    res.json({ message : "Welcome to the app"})
})

// listening on port 4000
