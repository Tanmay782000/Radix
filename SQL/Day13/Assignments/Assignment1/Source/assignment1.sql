use MODULE12

CREATE TABLE assignment1
(
id int primary key,
name varchar(100),
department varchar(100),
salary varchar(100)
)

INSERT INTO assignment1 values(1,'TANMAY','IT',5000)
INSERT INTO assignment1 values(2,'VISHWA','marketing',6000)
INSERT INTO assignment1 values(3,'VIR','.net',7000)
INSERT INTO assignment1 values(4,'TANMAY','php',10000)
INSERT INTO assignment1 values(5,'TANMAY','HR',13000)


SELECT * FROM assignment1


--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.
--Create the function
CREATE FUNCTION Compute_sal(@pay int)
returns int
as
begin
return(
@pay - (20 * @pay / 100)
)
end

--call the function
DECLARE @pay int 
set @pay = dbo.Compute_sal(200)
Print @pay


--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below. 1 Less Than Rs. 6,000/- NIL 2 Rs. 6,000/- or Above but less than Rs. 9,000/- 80/- 3 Rs. 9,000/- or Above but less than Rs. 12,000/- 150/- 4 Rs.12,000/- or Above 200/
ALTER FUNCTION PT(@pay float)
RETURNS float
AS
BEGIN
declare @res FLOAT
set @res = 0 
IF(@pay < 6000)
 begin
 set @res = @pay * 10
 return 0
 end
ELSE IF(@pay >= 6000 AND @pay < 9000)
 begin
 set @res = @pay - 80
 return @res
 end
ELSE IF(@pay >= 9000 AND @pay < 12000)
 begin
 set @res = @pay - 150	
 return @res
 end
ELSE IF(@pay >= 12000)
 set @res = @pay - 200	
 return @res
end


--call the function
SELECT dbo.PT(9000) as After_Professional_Text


--call the function 
DECLARE @pay float
set @pay = dbo.PT(9000)
PRINT @pay