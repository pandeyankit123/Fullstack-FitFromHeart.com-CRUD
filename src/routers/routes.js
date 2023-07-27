const express = require("express");
const Detail = require("../models/details");
const router = new express.Router();

router.get('/', (req, res)=>{
    res.status(200).render("index");
})

router.post('/', async (req, res)=>{
    try {
        const saveDetails = new Detail(req.body)
        const saved = await saveDetails.save();
        res.status(201).render("index");
        console.log(saveDetails);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/:id', async(req, res) =>{
    try {
        const _id = req.params.id;
        const detailofone = await Detail.findById(_id);
        res.status(200).json(detailofone);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id', async(req, res) =>{
    try {
        const _id = req.params.id;
        const updatedone = await Detail.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.status(200).json(detailofone);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    try {
        const updatedone = await Detail.findByIdAndUpdate(req.params.id);
        res.status(200).json(detailofone);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;