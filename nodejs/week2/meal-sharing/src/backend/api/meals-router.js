const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

//Respond with the json for all the meals

router.get("/", async(request, response) => {
  let data = meals;
  
  if ("maxPrice" in request.query) {
    const maxPrice = Number(request.query.maxPrice);
    data = data.filter(meal => meal.price <= maxPrice);
  }
  
  if ("title" in request.query) {
    const text = request.query.title;
    data = data.filter(meal=> meal.title.toLocaleLowerCase().includes(text))
  }
  
  if ("createdAfter" in request.query) {
    const d1 = new Date(request.query.createdAfter);
    data = data.filter(meal=> new Date(meal.createdAt) > d1)
  }
  
  if ("limit" in request.query) {
    const numberOfMeals = parseInt(request.query.limit);
    data = data.slice(0, numberOfMeals);
  }
  response.send(data);
  
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
  const paramId = Number(req.params.id);
  const myMeal = meals.find((meal)=> meal.id === paramId)
  res.send(myMeal)
})








module.exports = router;


