use Module5

CREATE SCHEMA assignment

CREATE TABLE assignment.employee(
Emp_Id int primary key,
First_name varchar(100),
Last_name varchar(100),
Salary int,
Joining_date date,
Department varchar(100),
Manager_Id int,
)

CREATE TABLE assignment.incentives(
Emp_ref_id int primary key,
Incentive_date date,
Incentive_amount bigint,
)

INSERT INTO assignment.incentives VALUES(1,'01-01-2013',4500)

SELECT * FROM assignment.employee
SELECT * FROM assignment.incentives

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT tm.First_name,tm.Last_name,DATEDIFF(yy,tm.Joining_date,tm.Incentive_date) as Total_DIff FROM (
SELECT emp.Emp_Id,emp.First_name,emp.Last_name,emp.Joining_date,inc.Incentive_date FROM assignment.employee as emp INNER JOIN assignment.incentives as inc on emp.Emp_Id = inc.Emp_ref_id
)as tm


--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

SELECT tm.First_name,tm.Incentive_amount FROM (
SELECT * FROM assignment.employee as emp INNER JOIN assignment.incentives as inc on emp.Emp_Id = inc.Emp_ref_id
)as tm where tm.Incentive_amount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT * FROM assignment.employee as emp LEFT OUTER JOIN assignment.incentives as inc on emp.Emp_Id = inc.Emp_ref_id

--Select EmployeeName, ManagerName from the employee table.

SELECT emp.First_name,emp.Manager_Id from assignment.employee as emp

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

SELECT tm.Emp_Id,First_name,isnull(tm.Incentive_amount,0) as incentive_amount From(
SELECT * FROM assignment.employee as emp full OUTER JOIN assignment.incentives as inc on emp.Emp_Id = inc.Emp_ref_id WHERE Incentive_amount is null
)as tm WHERE tm.Incentive_amount is NULL

