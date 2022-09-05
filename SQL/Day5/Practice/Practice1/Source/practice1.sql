CREATE SCHEMA Practice

CREATE TABLE Practice.employee(
Emp_id int Primary key,
First_name varchar(100) not null,
Last_name varchar(100) not null,
Salary bigint not null,
)

CREATE TABLE Practice.incentive(
Emp_ref_id int Primary key,
Incentive_date varchar(100) not null,
Incentive_amount varchar(100) not null,
)

alter table Practice.incentive alter column Incentive_date date

INSERT INTO Practice.employee(Emp_id,First_name,Last_name,Salary) values(2,'Vishwa','Shah',200000)
INSERT INTO Practice.incentive(Emp_ref_id,Incentive_date,Incentive_amount) values(2,'3-30-2020',250000)

select * from Practice.employee
select * from Practice.incentive

SELECT * from(
SELECT emp.First_name , inca.Incentive_amount from Practice.employee as emp Inner join Practice.incentive as inca on emp.Emp_id = inca.Emp_ref_id
) as fn where fn.Incentive_amount > 60000

SELECT fn.First_name,(fn.Incentive_amount - fn.Salary)as sal from(
SELECT emp.First_name , inca.Incentive_amount ,emp.Salary from Practice.employee as emp Inner join Practice.incentive as inca on emp.Emp_id = inca.Emp_ref_id
) as fn where fn.Incentive_amount > 20000

alter table Practice.employee add joining_date date

UPDATE Practice.employee
SET Practice.employee.joining_date = '12-26-2017'
WHERE Practice.employee.Emp_id = 2

SELECT tm.First_name,CONCAT(DATEDIFF(yy,tm.joining_date,tm.Incentive_date),' years') FROM
(SELECT emp.First_name,emp.joining_date,inc.Incentive_date from Practice.employee as emp INNER JOIN Practice.incentive as inc on emp.Emp_id = inc.Emp_ref_id 
)as tm

