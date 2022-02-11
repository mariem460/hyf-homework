--Part 1: Working with tasks
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("update my computer", "computer becomes very slow", "2017-09-26 03:06:46","2017-10-08 06:14:31","2017-12-22 20:58:03", 3, 1);

--Change the title of a task
UPDATE task
SET title = "new title"
WHERE id = 36;

--Change a task due date
UPDATE task
SET due_date = "2018-1-26 04:06:10"
WHERE id = 36;

--Change a task status
UPDATE task
SET status_id = 3
WHERE id = 36;

--Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 1;

--Delete a task
DELETE FROM task
WHERE id = 38;
DELETE FROM task
WHERE id = 37;





