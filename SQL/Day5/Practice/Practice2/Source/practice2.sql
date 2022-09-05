CREATE SCHEMA Practice2

CREATE TABLE Practice2.customer(
C_Id int PRIMARY KEY,
NAME varchar(100),
AGE int,
)

CREATE TABLE Practice2.OrderList(
O_Id int primary key,
O_Date Date,
CS_ID int,
Amount bigint,
)

SELECT * FROM Practice2.customer
SELECT * FROM Practice2.OrderList

INSERT INTO Practice2.OrderList values(3,'9-27-2022',2,40000)


SELECT * FROM Practice2.customer
SELECT * FROM Practice2.OrderList
--Left join 
SELECT cus.NAME,ord.Amount,ord.O_Date from Practice2.customer as cus LEFT OUTER JOIN Practice2.OrderList as ord
on cus.C_Id = ord.CS_ID
