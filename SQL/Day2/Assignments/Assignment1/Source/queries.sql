use Module2

CREATE SCHEMA Assignment
CREATE TABLE Assignment.EMPLOYEES(
id int PRIMARY KEY,
name varchar(100) not null,
email varchar(100) not null unique,
)

INSERT INTO Assignment.EMPLOYEES(id,name,email) values (5,'david','david@gamil.com')
select * from Assignment.EMPLOYEES

alter table Assignment.EMPLOYEES drop constraint [UQ__EMPLOYEE__AB6E616420B7EEF0]

--update the all emails as not available 
UPDATE Assignment.EMPLOYEES SET email='not available'

ALTER TABLE Assignment.EMPLOYEES ADD Commisionpct varchar(200) 

--update the all emails as not available and commisionpct = 0.10
UPDATE Assignment.EMPLOYEES SET email = 'not available' , Commisionpct = '0.10'

--update the all emails as available and commisionpct = 0.50 where id is 5

UPDATE Assignment.EMPLOYEES SET email = 'available' , Commisionpct = '0.50' WHERE id=5

select * from  Assignment.EMPLOYEES

alter table Assignment.EMPLOYEES ADD Department_id int

update Assignment.EMPLOYEES SET Department_id = 105 where id = 5 

--Write a SQL statement to change the Email column of employees table with �not available� for those employees whose DepartmentID is 80 and gets a commission is less than 20%
update Assignment.EMPLOYEES SET email = 'NOT AVAILABLE' where Department_id=103 AND Commisionpct<.20


alter table Assignment.EMPLOYEES ADD department_name varchar(100)


update Assignment.EMPLOYEES SET department_name = 'Graphic designer' where id = 5


--Write a SQL statement to change the Email column of employees table with �not available� for those employees who belongs to the �Accouning� department.
UPDATE Assignment.EMPLOYEES SET email = 'not available' WHERE department_name = 'Accounting'

alter table Assignment.EMPLOYEES ADD salary int


update Assignment.EMPLOYEES SET salary = 10000 where id = 5

--Write a SQL statement to change salary of employee to 8000 whose ID is 105, if the existing salary is less than 5000.
UPDATE Assignment.EMPLOYEES SET salary = 8000 WHERE id = 1 AND salary < 5000

select * from  Assignment.EMPLOYEES WHERE email like 'a%'

--Write a SQL statement to change job ID of employee which ID is 118, to SH_CLERK if the employee belongs to department, which ID is 30 and the existing job ID does not start with SH.
UPDATE Assignment.EMPLOYEES  SET id = 'SH_CLERK' WHERE id = 1 AND Department_id = 101 AND NOT name like 'SH%'

ALTER TABLE Assignment.EMPLOYEES alter column id varchar(100) not null




ALTER TABLE Assignment.EMPLOYEES ADD PRIMARY KEY (id)


UPDATE Assignment.EMPLOYEES SET Department_id = 110 where Department_id = 101

select * from  Assignment.EMPLOYEES


--Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, salary will be increased by 25% for the department 40, 15% for department 90 and 10% for the department 110 and the rest of the departments will remain same.
UPDATE Assignment.EMPLOYEES SET salary = CASE Department_id WHEN 40 THEN salary + (salary*.25) WHEN 90 THEN salary + (salary*.15) WHEN 110 THEN salary + (salary * .10) ELSE salary end WHERE Department_id IN (40,50,60,70,80,90,100,110)


