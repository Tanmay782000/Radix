use Module4

create table assignment1(
id int primary key not null,
name varchar(100) not null,
er_no int not null,
address varchar(100) not null,
salary varchar(100) not null,
)

alter table assignment1 alter column salary int

insert into assignment1(id,name,er_no,address,salary) values(4,'vir',724,'anand',15000)

alter table assignment1 add department varchar(100)

select * from assignment1

Update assignment1 
SET department = 'tester'
where id = 4


--Table Name: Employee Write a query to rank employees based on their salary for a month Select 4th Highest salary from employee table using ranking function Get department, total salary with respect to a department from employee table.
SELECT * from (
SELECT name,department,salary,dense_RANK() OVER (ORDER BY salary DESC) AS my_rank FROM assignment1
) as T where T.my_rank = 4


-- from employee table order by salary ascending Get department wise minimum salary from employee table order by salary ascending
SELECT * from(
SELECT department,sum(salary) as sal from  assignment1 group by department 
)as tm order by tm.sal asc


--from employee table order by salary ascending Get department wise minimum salary from employee table order by salary Decending
SELECT * from(
SELECT department,sum(salary) as sal from  assignment1 group by department 
)as tm order by tm.sal desc


--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
SELECT * from(
SELECT department,sum(salary) as sal from  assignment1 group by department 
)as tm where tm.sal > 5000 order by tm.sal desc





























