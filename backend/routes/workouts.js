const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

router.use(requireAuth)

const Workout = require('../models/workoutModel')

//get all workouts
router.get('/', getWorkouts)


//get a single workout
router.get('/:id', getWorkout )


// POST a new workout u
router.post('/', createWorkout)

// DELETE a new workout u
router.delete('/:id', deleteWorkout)

// UPDATE a new workout u
router.patch('/:id', updateWorkout)





module.exports= router 
