use share_meals;

-- meal queries
-- Get all meals
SELECT Meal.title
FROM Meal;

-- Add a new meal
INSERT INTO `Meal`(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
   values ("salade", "A salad is a dish consisting of mixed, mostly natural ingredients with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm.", "Greece", "2022-11-15  16:18:16", 10, 33.5, "2021-10-25");

-- Get a meal with any id, fx 1
SELECT Meal.title
FROM Meal
WHERE Meal.id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET Meal.title = "carbonara"
WHERE Meal.id = 5;

-- Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE Meal.id = 3 ;

-- Reservation queries
-- Get all reservations
SELECT *
FROM Reservation;


-- Add a new reservation
INSERT INTO `Reservation`(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
   values 
   (2, 1, "2022-2-16", "+45 54635731", "hanna", "hannayelson@yahoo.com");

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE Reservation.id = 6 ;

-- Get a reservation with any id, fx 1
SELECT *
FROM Reservation
WHERE Reservation.id = 2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests = 4
WHERE Reservation.id = 5;

-- Review queries
-- Get all reviews
SELECT *
FROM Review;

-- Add a new review
insert into `Review`(title, description, meal_id, stars, created_date)
values ("not bad", "It could be better", 2, 3, "2022-11-28");

-- Get a review with any id, fx 1
SELECT *
FROM Review
WHERE Review.id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET stars = 4
WHERE Review.id = 2;

-- Delete a review with any id, fx 1
DELETE FROM Review
WHERE Review.id = 1 ;

-- Additional queries
--Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE Meal.price < 90;

-- Get meals that still has available reservations
SELECT *
FROM Meal
JOIN Reservation
ON Meal.id = Reservation.meal_id
WHERE number_of_guests < 10;

-- Get meals that partially match.

SELECT *
FROM Meal
WHERE Meal.description LIKE ("%salad%");


-- Get meals that has been created between two dates
SELECT *
FROM Meal
WHERE Meal.created_date > "2016-02-24" AND Meal.created_date < "2016-02-26";

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM Meal
LIMIT 2;

-- Get the meals that have good reviews

SELECT *
FROM Meal
JOIN Review
ON Meal.id = Review.meal_id
WHERE Review.title = "amazing"
OR Review.title = "very good";

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE  Reservation.meal_id = 1
ORDER BY created_date
; 

-- Sort all meals by average number of stars in the reviews
SELECT AVG(stars) as "avg_stars", Meal.title
FROM Review
JOIN Meal
ON Review.meal_id = Meal.id
GROUP BY Review.meal_id 
;