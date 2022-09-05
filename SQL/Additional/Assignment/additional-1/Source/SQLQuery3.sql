CREATE DATABASE EXTRA3
USE EXTRA3

CREATE TABLE Details
(
StudentID int primary key,
Name varchar(100),
Address varchar(100),
Board varchar(100),
)

CREATE TABLE Marks(
StudentID int,
Science int,
Math int,
English int,
Average int,
Grade varchar(100)
FOREIGN KEY(StudentID) references Details(StudentID)
)

--INSERT INTO DETAILS
INSERT INTO Details VALUES(1,'A','Ahmedabad','CBSE')
INSERT INTO Details VALUES(2,'B','Calcutta','State')
INSERT INTO Details VALUES(4,'D','Ahmedabad','CBSE')
INSERT INTO Details VALUES(3,'C','Dehli','State')

--INSERT INTO MARKS
INSERT INTO Marks VALUES(1,	34,	90,	56,	67.5,'C')
INSERT INTO Marks VALUES(2,	45,	89,	59,	70.5,'B')
INSERT INTO Marks VALUES(3,	56,	95,	62,	77, 'B')
INSERT INTO Marks VALUES(1,	33,	56,	65,	52.5,'C')
INSERT INTO Marks VALUES(2,	66,	34,	68,	50.5,'C')
INSERT INTO Marks VALUES(3,	44,	36,	71,	46.75,'D')
INSERT INTO Marks VALUES(4,	34,	38,	74,	46,'D')
INSERT INTO Marks VALUES(4,	23,	40,	77,	45,	'D')

--SELECT THE TWO TABLES
SELECT * FROM Details
SELECT * FROM Marks

--CREATE THE PROCEDURE
CREATE PROCEDURE data
@Board1 varchar(100) 
AS
begin
if(@Board1 = 'CBSE')
begin
SELECT main.*,(CASE WHEN Average >= 85 then 'A' WHEN Average >= 75 THEN 'B' WHEN Average >= 50 THEN 'C' WHEN  Average < 50 THEN 'D' end) as Grade  FROM (
SELECT Details.Name,Details.Board,Marks.Science,Marks.Math,Marks.English,sum((50 * Marks.Science /100)+(40 * Marks.Math /100)+(10 * Marks.English /100)) as Average FROM 
Details LEFT JOIN Marks on Details.StudentID = Marks.StudentID WHERE Details.Board=@Board1 GROUP BY Details.Name,Details.Board,Marks.Science,Marks.Math,Marks.English
) as main
end
else if(@Board1 = 'State')
begin
SELECT main.*,(CASE WHEN Average >= 80 then 'A+' WHEN Average >= 60 THEN 'A' WHEN Average >= 50 THEN 'B' WHEN  Average >= 35 THEN 'C' WHEN  Average < 35 THEN 'D' end) as Grade  FROM (
SELECT Details.Name,Details.Board,sum((40 * Marks.Science /100)+(40 * Marks.Math /100)+(20 * Marks.English /100)) as Average,Marks.Science,Marks.Math,Marks.English FROM 
Details LEFT JOIN Marks on Details.StudentID = Marks.StudentID WHERE Details.Board=@Board1 GROUP BY Details.Name,Details.Board,Marks.Science,Marks.Math,Marks.English
) as main
end
else
begin
print 'no records'
end
end

--CALL THE PROCEDURE
Execute data @Board1 = 'CBSE'   
Execute data @Board1 = 'State' 