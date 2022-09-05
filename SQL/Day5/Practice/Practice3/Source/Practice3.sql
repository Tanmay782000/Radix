use Module5
CREATE SCHEMA Practice3


CREATE TABLE Practice3.customer(
C_Id int PRIMARY KEY,
NAME varchar(100),
AGE int,
)


CREATE TABLE Practice3.OrderList(
O_Id int primary key,
O_Date Date,
CS_ID int,
Amount bigint,
)

INSERT INTO Practice3.customer VALUES(5,'JAY',25)

INSERT INTO Practice3.OrderList VALUES(4,'8-1-2018',3,90000)

--RIGHT JOIN
SELECT cus.C_Id,cus.NAME,ord.Amount FROM Practice3.customer as cus RIGHT JOIN Practice3.OrderList as ord on cus.C_Id = ord.CS_ID

--SELF JOIN
SELECT cus.C_Id,cus.NAME,ord.CS_ID FROM Practice3.customer as cus , Practice3.OrderList as ord WHERE cus.C_Id = ord.CS_ID

--FULL OUTER JOIN
SELECT cus.C_Id,cus.NAME,ord.Amount FROM Practice3.customer as cus FULL outer JOIN Practice3.OrderList as ord on cus.C_Id = ord.CS_ID

SELECT cus.C_Id from Practice3.customer as cus UNION SELECT Practice3.OrderList.Amount FROM Practice3.OrderList