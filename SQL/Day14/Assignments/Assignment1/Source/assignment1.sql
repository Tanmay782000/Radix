CREATE DATABASE MODULE14
USE MODULE14

--Student -> StudentID, StudentName, TotalFees, RemainingAmt 
-- Course -> CourseID, CourseName, TotalFees 
--CourseEnrolled -> StudentID, CourseID 
--FeePayment ->StudentID, AmountPaid, DateofPayment 

CREATE TABLE Student(
StudentID int primary key,
StudentName varchar(100),
TotalFees bigint,
RemainigAmount bigint
)

INSERT INTO Student values(1,'TANMAY',80000,20000)
INSERT INTO Student values(2,'VIR',80000,25000)
INSERT INTO Student values(3,'SHYAM',80000,40000)
INSERT INTO Student values(4,'RAM',80000,10000)
INSERT INTO Student values(5,'DAS',80000,15000)


CREATE TABLE COURSE(
CourseID int PRIMARY KEY,
CourseName varchar(100),
TotalFees bigint
)

INSERT INTO COURSE values(1,'PYTHON',4000)
INSERT INTO COURSE values(2,'.NET',3000)
INSERT INTO COURSE values(3,'PHP',2000)
INSERT INTO COURSE values(4,'JAVA',3500)


CREATE TABLE CourseEnrolled(
StudentID int foreign key references Student(StudentID),
CourseID int foreign key references COURSE(CourseId),
)

INSERT INTO CourseEnrolled values(1,1)
INSERT INTO CourseEnrolled values(2,4)
INSERT INTO CourseEnrolled values(3,2)
INSERT INTO CourseEnrolled values(4,3)
INSERT INTO CourseEnrolled values(5,1)
TRUNCATE TABLE CourseEnrolled
--FeePayment ->StudentID, AmountPaid, DateofPayment 

CREATE TABLE FeePayment(
StudentID int foreign key references Student(StudentID),
AmountPaid BIGINT,
DateofPayment DATE
)

INSERT INTO FeePayment VALUES(1,80000,'12-25-2021')
INSERT INTO FeePayment VALUES(2,80000,'7-15-2021')
INSERT INTO FeePayment VALUES(3,80000,'9-23-2021')
INSERT INTO FeePayment VALUES(4,80000,'1-17-2021')

ALTER TRIGGER TRIGGER_INSERT
ON CourseEnrolled
FOR INSERT
AS
BEGIN
DECLARE @CSid INT
DECLARE @STID INT
DECLARE @course_amount bigint
SELECT @STID = StudentID FROM inserted
SELECT @csid = CourseID FROM inserted
set @course_amount = (select totalfees from COURSE where CourseID = @CSid)

update Student
set TotalFees = TotalFees + @course_amount
where StudentID = @STID
end

select * from CourseEnrolled         
select * from COURSE
select * from STUDENT
select * from FeePayment

CREATE TRIGGER INSERT_TRIGGER2
on FeePayment
for insert
as
begin

declare @id int
declare @remainig_amount bigint
declare @setamount bigint
declare @amountpaid bigint

select @id = StudentID from inserted
select @amountpaid = AmountPaid from inserted
select @setamount = (select @amountpaid from FeePayment where StudentID = @id)
update student
set RemainigAmount = TotalFees - @setamount
where StudentID = @id
end

delete from FeePayment where StudentID = 2

insert into FeePayment values(2,60000,'03-03-2021')

--remaining amount = totalfees - amount paid

