const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");
//Respond with the json for all reservations *
router.get("/",(request, response) => {
    response.send(reservations);
});

//Respond with the json for the reservation with the corresponding id
router.get("/:id", (req, res)=> {
  const paramId = Number(req.params.id);
  const myReservation = reservations.find((reservation)=> reservation.id === paramId)
  res.send(myReservation)
})
module.exports = router;    