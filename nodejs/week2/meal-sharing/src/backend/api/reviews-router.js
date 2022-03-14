const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");
//Respond with the json for all reviews *
router.get("/",(request, response) => {
    response.send(reviews);
  });
  //Respond with the json for the review with the corresponding id
  router.get("/:id", (req, res)=> {
    const paramId = Number(req.params.id);
    const myReview = reviews.find((review)=> review.id === paramId)
    res.send(myReview)
  })
  
  
  module.exports = router;