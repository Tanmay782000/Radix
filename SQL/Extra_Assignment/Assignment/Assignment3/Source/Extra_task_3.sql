USE EXTRA3

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
INSERT INTO STUDENT VALUES(2,'RAMESH')
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
INSERT INTO studenthours values(6,1,'02-28-2021',8)
SELECT * FROM studenthours

SELECT * FROM student
SELECT * FROM studentdetail
SELECT * FROM studentpresent
SELECT * FROM studenthours


-- Change value of 'student.name' with any other value for student.studentid = 3.
UPDATE student
SET name = 'RAM'
WHERE student_id = 3

--Update all "student" records to append character " A." as the middle name for "student.name" field.

UPDATE student 
SET name += '.A'

SELECT * FROM STUDENT
SELECT * FROM studenthours

UPDATE studenthours
set date = '2-14-2020'
where student_id = 3


select otr.name,otr.tds.otr from (
select student.student_id,student.name,(datepart(mm,date)) as tds,studenthours.hours from student inner join studenthours on student.student_id = studenthours.student_id
)as otr where otr.tds between 1 and 3

Declare  @SHours table (student_id int, Shours int,Months int )
Insert into @SHours
select student.student_id,studenthours.hours, DATEPART(mm,date) months from STUDENT inner join studenthours on student.student_id = studenthours.student_id 
Select * from @SHours

Select s.name,(Select SUM(Shours) from @SHours sh where sh.student_id=s.student_id and sh.Months = 1 ) Jan,
(Select SUM(Shours) from @SHours sh where sh.student_id=s.student_id and sh.Months = 2 ) Feb,
(Select SUM(Shours) from @SHours sh where sh.student_id=s.student_id and sh.Months = 3 ) Mar 
from student s 


SELECT * FROM STUDENT
SELECT * FROM studenthours
