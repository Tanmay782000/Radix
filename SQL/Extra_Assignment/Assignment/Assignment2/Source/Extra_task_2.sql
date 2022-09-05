CREATE DATABASE EXTRA2

CREATE TABLE STUDENT(
student_id int primary key,
name varchar(100) not null,
)

CREATE TABLE studentdetail(
studentdetail_id int primary key,
student_id int,
standard varchar(100),
gender varchar(100)
)
alter table studentdetail add foreign key(student_id) REFERENCES STUDENT(student_id) 

CREATE TABLE studentpresent(
studentpresent_id int primary key,
student_id int not null,
month int not null,
present int not null,
FOREIGN KEY(student_id) REFERENCES STUDENT(student_id)
)

CREATE TABLE studenthours(
studenthours_id int primary key,
student_id int not null,
date date not null,
hours int not null
FOREIGN KEY(student_id) REFERENCES STUDENT(student_id)
)

--- Insert appropriate records in the above tables.
--INSERT INTO STUDENT
INSERT INTO STUDENT VALUES(1,'TANMAY')
INSERT INTO STUDENT VALUES(2,'VISHWA')
INSERT INTO STUDENT VALUES(3,'MAHESH')
INSERT INTO STUDENT VALUES(4,'VIR')
INSERT INTO STUDENT VALUES(5,'JAY')


--INSERT INTO studentdetail
INSERT INTO studentdetail VALUES(1,1,'7th','Male')
INSERT INTO studentdetail VALUES(2,2,'10th','FeMale')
INSERT INTO studentdetail VALUES(3,3,'3th','Male')
INSERT INTO studentdetail VALUES(4,4,'5th','Male')
INSERT INTO studentdetail VALUES(5,5,'6th','Male')

--INSERT INTO studentpresent
INSERT INTO studentpresent VALUES(1,1,09,26)
INSERT INTO studentpresent VALUES(2,2,09,23)
INSERT INTO studentpresent VALUES(3,3,09,22)
INSERT INTO studentpresent VALUES(4,4,09,24)
INSERT INTO studentpresent VALUES(5,5,09,20)

--INSERT INTO houres
INSERT INTO studenthours values(1,1,'09-10-2020',7)
INSERT INTO studenthours values(2,2,'09-18-2021',8)
INSERT INTO studenthours values(3,3,'09-20-2021',6)
INSERT INTO studenthours values(4,4,'09-24-2021',6.5)
INSERT INTO studenthours values(5,5,'09-28-2021',8)


SELECT * FROM student
SELECT * FROM studentdetail
SELECT * FROM studentpresent
SELECT * FROM studenthours

-- Write queries for the following requirements.
    
    --  Display following details for each student:
        
        --  Name

        --   Standard

        --  Sex

SELECT std.name,det.standard,det.gender FROM student as std LEFT JOIN studentdetail as det ON std.student_id = det.student_id


-- Find SUM of student hours.
SELECT SUM(sthrs.hours) as My_Hours from studenthours as sthrs LEFT JOIN student as std on std.student_id = sthrs.student_id


--Find Average Present of each student.
SELECT student_id,AVG(present) as AVERAGE_PRESENT FROM studentpresent group by student_id

--Find Minimum present among all students.

SELECT student_id,present as AVERAGE_PRESENT FROM studentpresent WHERE present=(select min(present) from studentpresent) 

--Find Maximum present among all students.

SELECT student_id,present as AVERAGE_PRESENT FROM studentpresent WHERE present=(select max(present) from studentpresent) 

--Display fields like Name, Date, Hours from "studenthours" table where Date should be in following format :

SELECT student.name,FORMAT(date, 'd', 'en-US') as US_format,FORMAT(date,'d','Fr-FR') as France,FORMAT(date,'d','fr-CA') as france,FORMAT(date,'dd/mm yyyy')as custom_date,hours from studenthours INNER JOIN student ON
studenthours.student_id = student.student_id