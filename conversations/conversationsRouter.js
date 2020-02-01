const express = require("express")
const router = require('express').Router();
const Conversations = require('./conversationsModels')



router.get("/:user_id", (req, res) => {
    const { user_id } = req.params 
    Conversations.findByUserId(user_id)
    .then(conversations => {
        res.status(200).json(conversations)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve projects"})
    })
})

module.exports = router