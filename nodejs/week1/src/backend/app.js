const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews")
const reservations = require("./data/reservations")

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
// meals
/*Respond with the json for all the meals. For each meal, 
if there are reviews matching it's meal ID, add these reviews 
to each meal in the form of an array. For meals that do not have any reviews, 
the "reviews" property will be an empty array.*/

app.get('/meals', async(request, response) => {
  const mealsReviews = meals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  response.send(mealsReviews);
});

//Respond with the json for all the meals (including it's reviews)
// that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = meals
  .filter(meal => meal.price <= 50)
  .map((meal)=> {meal.reviews = reviews
  .filter((review)=> review.mealId === meal.id)
  return meal;
  })
  response.send(cheapMeals);
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const largeMeals = meals
  .filter((meal => meal.maxNumberOfGuests >= 4))
  .map((meal)=> {meal.reviews = reviews
  .filter(review => review.mealId === meal.id)
  return meal
  })
  response.send(largeMeals);
});


//Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  const randomMeal = [meals[randomIndex]];
  const RandomMealRev = randomMeal
  .map((anyMeal)=> {anyMeal.reviews = reviews
  .filter(review => review.mealId === anyMeal.id)
  return randomMeal;
})
  response.send(RandomMealRev);
});

//Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send((reservations));
});

//	Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomIndex = Math.floor(Math.random() * reservations.length);
  const randomReservation = [reservations[randomIndex]];
  response.send(randomReservation);
});

module.exports = app;

