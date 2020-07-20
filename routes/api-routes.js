const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const db = require("../model");

router.get("/api/portfolioItems", (req,res) => {
    db.PortfolioItem.find({}, (err, items) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(items)
        }  
    })
})

router.get("/api/test", (req,res) => {
    res.json({"good":"togo"})
})

router.post("/api/addItem", (req, res) => {
    const {title, description, app, git, gifUrl} = req.body
    db.PortfolioItem.create({
        title: title,
        description: description,
        app: app,
        git: git,
        gifUrl: gifUrl
    }, (err, doc) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(doc)
        }
    })
})

module.exports = router
