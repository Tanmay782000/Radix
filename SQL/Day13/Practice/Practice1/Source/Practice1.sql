CREATE DATABASE MODULE12
USE MODULE12

--CREATING THE TABLE
CREATE TABLE temp
(
ID int primary key,
Name varchar(100),
salary int,
)

INSERT INTO temp values(1,'TANMAY',80000)
INSERT INTO temp values(2,'VIR',50000)
INSERT INTO temp values(3,'VISHWA',60000)
INSERT INTO temp values(4,'RAM',55000)

select * FROM temp

--SCALER function
--CREATE THE FUNCTION
alter FUNCTION month_sal(@pay int)
returns int
as
begin
return (@pay * 20 * 20)
end


SELECT dbo.month_sal(30)
--Manupilate the salary in temp table
SELECT ID,Name,dbo.month_sal(salary) FROM temp



--Table valued function
--Create the function
CREATE FUNCTION T_valued(@value varchar(100))
returns table
as
return(
SELECT id,salary FROM temp where Name = @value  
)

--Call the function 
select * FROM T_valued('TANMAY')