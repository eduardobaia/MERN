const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')
const router = express.Router()
const Workout = require('../models/workoutModel')

//get all workouts
router.get('/', getWorkouts)


//get a single workout
router.get('/:id', getWorkout )


// POST a new workout u
router.post('/', createWorkout)

// DELETE a new workout u
router.delete('/:id', (req,res) =>{
    res.json({msg: "DELETE a new workout "})
})

// UPDATE a new workout u
router.patch('/:id', (req,res) =>{
    res.json({msg: "UPDATE a new workout "})
})





module.exports= router 
