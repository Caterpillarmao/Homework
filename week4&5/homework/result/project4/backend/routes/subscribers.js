const express=require('express');
const subscriber = require('../models/subscriber');
const router=express.Router();
const Subscriber = require('../models/subscriber')

//Getting all 
router.get('/', async (req,res)=> {
    try {
        const subscribers = await Subscriber.find()
        res.status(200).json(subscribers)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    console.log("Hello hhhh")
})

//Getting one
router.get('/:id', getSubscriber, (req,res) => {
    send(res.subscriber.name)
})

//creating one
router.post('/', async (req,res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber) //successful send
    } catch (err) {
        res.status(400).json({message: err.message}) //something wrong with user input
    }
})

//Updating one
router.patch('/', (req,res) => {
    
})

//Deleting one
router.delete('/:id', async (req,res) => {
    try {
        await res.subscriber.remove();
        res.json({message:"Deleting"})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: "can't find"}) //can't find
        } 
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports=router
