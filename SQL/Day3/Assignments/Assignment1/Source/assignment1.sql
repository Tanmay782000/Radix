use Module3


CREATE TABLE practice(
id int primary key,
name varchar(30) not null,
address varchar(40) not null,
)

INSERT INTO practice(id,name,address,hire_date) values(3,'VIR','Rajkot','7-7-2020')

select * from practice

alter table practice add salary decimal(10,0)

Update practice 
set name = 'tommy'
where id = 4

alter table practice add hire_date date 

UPDATE practice 
SET salary = 250000
WHERE id = 8

ALTER TABLE practice ALTER column phone_no BIGINT

UPDATE practice 
SET phone_no = 5435334545
where id = 8


--Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName
select * from (
select DATALENGTH(name) as Name_length,name as my_name from practice where name like 'T%' or name like 'V%' or name like 'R%'
) as tm order by tm.my_name ASC

--Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
select name,concat(LEFT('$',1),salary) as saly from practice

--Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
select name,hire_date as hire_datenew from practice where (DATEPART(mm,hire_date) = 7) OR (DATEPART(dd,hire_date) = 7)

--Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
select name,DATALENGTH(name) as Name_length from practice WHERE lastname like '__%t%'

--Write a query to extract the last 4 character of PhoneNumber.
SELECT name,RIGHT(phone_no,4) from practice

--Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.
UPDATE practice
SET phone_no = replace(phone_no,124,999)
WHERE phone_no LIKE '%124%'

--Write a query to calculate the age in year.
SELECT id,name,DATEDIFF(yy,hire_date, GETDATE()) as total_years_in_company from practice

--Write a query to get the distinct Mondays from HireDate in employees tables.
SELECT name from practice where DATENAME(WEEKDAY,hire_date) = 'Monday'

--Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’
SELECT * from practice where hire_date between '12-20-2020' AND '7-15-2021'

--Write a query to display the current date in the following format. Sample output : 12:00 AM Sep 5, 2014
SELECT FORMAT(GETDATE(),'hh tt MMMM dd,yyyy') as ddrte

--Write a query to get the FirstName, LastName who joined in the month of June.
SELECT name,lastname from practice where  (DATENAME(MM,hire_date) = 'July')

--Write a query to get first name, hire date and experience of the employees.
SELECT name,hire_date,DATEDIFF(yy,hire_date,GETDATE()) as experiance from practice 

--Write a query to get first name of employees who joined in 1987.
SELECT name,hire_date as Hire_month from practice where DATEPART(yy,hire_date) = 2021 