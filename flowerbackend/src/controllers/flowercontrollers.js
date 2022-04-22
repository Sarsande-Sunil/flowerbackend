const express = require("express");

const { Flower,Wedding} = require("../models/flowermodel")

const router = express.Router();

// curd operation for flower 
router.post("/homepage", async (req, res) => {
  try {
    let flower = await Flower.create(req.body);
    res.status(201).send(flower);
  } catch (err) {
    console.log(err);
  }
});

router.get("/homepage", async (req, res) => {
  try {
    let flower = await Flower.find().lean().exec();
    res.status(200).send(flower);
  } catch (err) {
    console.log(err);
  }
});

// curd operation for flower 
router.post("/wedding", async (req, res) => {
  try {
    let wedding = await Wedding.create(req.body);
    res.status(201).send(wedding);
  } catch (err) {
    console.log(err);
  }
});

router.get("/wedding", async (req, res) => {
  try {
    let wedding = await Flower.find().lean().exec();
    res.status(200).send(wedding);
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
