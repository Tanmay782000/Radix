USE Module7

CREATE SCHEMA practice

CREATE TABLE practice.employee(
Emp_Id int primary key,
First_name varchar(100),
Last_name varchar(100),
Salary int,
Joining_date date,
Department varchar(100),
Manager_Id int,
)

CREATE TABLE practice.incentives(
Emp_ref_id int primary key,
Incentive_date date,
Incentive_amount bigint,
)


SELECT * FROM practice.employee

INSERT INTO practice.employee VALUES(4,'Jay','Patel',30000,'03-20-2018','network engineer',24)

alter table practice.incentives drop PK__incentiv__C855EA5327F2F627

INSERT INTO practice.incentives VALUES(1,'07-24-2020',6000)

SELECT * FROM practice.incentives

SELECT emp.First_name,inc.Incentive_amount FROM practice.employee as emp LEFT OUTER JOIN practice.incentives as inc on emp.Emp_Id = inc.Emp_ref_id
UNION 
SELECT emp.First_name,inc.Incentive_amount FROM practice.employee as emp RIGHT OUTER JOIN practice.incentives as inc on emp.Emp_Id = inc.Emp_ref_id


SELECT * FROM practice.employee


WITH customers as(SELECT * FROM practice.employee WHERE First_name = 'Tanmay')  
SELECT Last_name FROM customers;  





SELECT First_name,DENSE_RANK() OVER (order by First_name) as seq from practice.employee 



