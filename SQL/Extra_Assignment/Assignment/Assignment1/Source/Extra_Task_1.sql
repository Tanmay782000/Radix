CREATE DATABASE EXTRA1

CREATE TABLE Student_details(
Name varchar(100) not null,
Standard varchar(100) not null,
sex varchar(100) not null,
monthly_present varchar(100) not null,
daily_hours date
)

CREATE TABLE Products(
Name varchar(100) not null,
Prices bigint not null
)

CREATE TABLE Meterials(
Name varchar(100) not null,
Price bigint not null
)


INSERT INTO dbo.Meterials VALUES('linen',350)


--- Display all the records for each tables separately.
SELECT * from dbo.Meterials
SELECT * from dbo.Products
SELECT * from dbo.Student_details

--with delete
DELETE FROM dbo.Products
DELETE FROM Dbo.Meterials where Name = 'cotton'

--without delete
Truncate table dbo.Meterials

DROP TABLE dbo.Meterials
DROP TABLE dbo.Products
DROP TABLE dbo.Student_details