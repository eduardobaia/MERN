const e = require('express')
const express = require('express')

const router = express.Router()
const Workout = require('../models/workoutModel')

router.get('/', (req,res) => {
    res.json({msg: 'GET ALL WORKOUTS'})
})


//get a single workout
router.get('/:id', (req,res) => {
    res.json({msg: 'GET a single '})
})


// POST a new workout u
router.post('/', async (req,res) =>{
    const {title, load, reps} = req.body


    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }

    res.json({msg: "POST a new workout "})
})

// DELETE a new workout u
router.delete('/:id', (req,res) =>{
    res.json({msg: "DELETE a new workout "})
})

// UPDATE a new workout u
router.patch('/:id', (req,res) =>{
    res.json({msg: "UPDATE a new workout "})
})





module.exports= router
