-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com
use hyf_lesson2;

SELECT task.title, user.email
from task
join user_task
ON task.id = user_task.task_id
JOIN user
on user.id = user_task.user_id
WHERE user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title
from task
join user_task
on task.id = user_task.task_id
JOIN user
on user.id = user_task.user_id
WHERE user.name = "Donald Duck" AND task.status_id = 1;
-- Get all the tasks for 'Maryrose Meadows' that were 
-- created in september (hint: month(created)=month_number)
SELECT task.title, task.created
from task
join user_task
on task.id = user_task.task_id
JOIN user
on user.id = user_task.user_id
WHERE user.name = "Maryrose Meadows" AND  month(created)= 9;


-- Find how many tasks where created in each month, e.g. how many tasks
-- were created in october, 
-- how many tasks were created in november, etc. (hint: use group by)
SELECT task.title 
FROM task
WHERE month(created)= 10;

SELECT task.title
FROM task
WHERE month(created)= 9;