use hyf_lesson1;

--1.Find out how many tasks are in the task table
SELECT count(title)
from task;

--2.Find out how many tasks in the task table do not have a valid due date

SELECT COUNT(*)
from task
WHERE due_date IS NULL;

--3 Find all the tasks that are marked as done;
SELECT count (status_id)
from task
WHERE status_id= 3;

--4 find all the tasks that are not marked as done
SELECT count (status_id)
from task
WHERE status_id != 3;

--5 Get all the tasks, sorted with the most recently created first

SELECT title
from task
ORDER BY created;

--6 Get the single most recently created task
SELECT title
FROM task
ORDER BY created
LIMIT 1;

--7 Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
from task
WHERE due_date IS NOT NULL
AND title IS NOT NULL;

--8 Get the title and status (as text) of all tasks
SELECT task.title, status.name
FROM task 
JOIN status 
ON task.status_id = status.id;

--9 Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.status_id) AS "n_time(s)"
FROM status
JOIN task
ON status.id = task.status_id
GROUP BY status.name;

--10 Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, task.created
FROM status
JOIN task
ON status.id = task.status_id
ORDER BY task.created ASC;



