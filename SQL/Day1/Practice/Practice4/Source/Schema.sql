use Module1 

CREATE SCHEMA Practice3;

CREATE TABLE Practice3.Employee(
Employee_id int PRIMARY KEY,
First_name varchar(100) not null,
Last_name varchar(100) not null,
Email varchar(100) not null,
Phone_number int not null,
Hire_Date int not null,
Job_ID int FOREIGN KEY REFERENCES Practice3.Job(JobID),
Salary int not null,
Commission int not null,
Manager_ID int not null,
Department_ID int FOREIGN KEY REFERENCES Practice3.Department(DepartmentID)
)