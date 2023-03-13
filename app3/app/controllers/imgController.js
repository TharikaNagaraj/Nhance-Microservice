const express = require("express")
const Image = require("../models/imgModel")

const imgController = {}

imgController.create = (req,res) => 
{
    const body = req.body
    const image = new Image(body)
    // console.log('file',req.file)
    if(!(req.file == undefined))
    {
        const url = req.protocol + "://" + req.get("host")
        image.imgPath = url + "/app3/uploads/" + req.file.filename
        image.save()
            .then((ele) => 
            {
                res.json(ele)
            })
            .catch((err) => 
            {
                res.json(err)
            })
    }
    else
    {
        res.json("No file found")
    }
}

imgController.showOne = (req,res) => 
{
    const name = req.params.name
    // console.log("name",name)
    Image.findOne({"imgName":name})
        .then((image) => 
        {
            // console.log(image)
            res.json(image)
        })
        .catch((err) => 
        {
            res.json(err)
        })
}

imgController.showAll = (req,res) => 
{
    Image.find()
        .then((ele) => 
        {
            res.json(ele)
        })
        .catch((err) => 
        {
            res.json(err)
        })
}

imgController.delete = (req,res) => 
{
    const id = req.params.id
    Image.findByIdAndDelete(id)
        .then((image) => 
        {
            res.json(image)
        })
        .catch((err) => 
        {
            res.json(err)
        })
}

module.exports = imgController