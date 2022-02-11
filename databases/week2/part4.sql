--Part 4: Creating a database

CREATE database students;

use students;
--student table
CREATE Table `student` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR (32),
    `last_name` VARCHAR (64)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--course table
CREATE Table `course` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (32),
    `teacher_id` INT (10)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--teacher table
CREATE Table `teacher` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (64),
    `teacher_id` VARCHAR (64)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--class table
CREATE Table `class` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (64),
    `teacher_id` INT (10),
    CONSTRAINT `fk_Class` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



--junction table : student_course
CREATE Table `student_course` (
    `student_id` INT(10) unsigned NOT NULL,
    `course_id` INT(10) unsigned NO NULL,
    PRIMARY KEY(`student_id`, `course_id`),
    CONSTRAINT `fk_student_course_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_student_course_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


