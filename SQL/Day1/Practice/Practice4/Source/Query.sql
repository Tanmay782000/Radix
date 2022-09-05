use Module1

ALTER table Practice3.Employee Alter column Phone_number BIGINT

Insert INTO Practice3.Employee(Employee_id,First_name,Last_name,Email,Phone_number,Hire_Date,Job_ID,Salary,Commission,Manager_ID,Department_ID)
Values(1,'TANMAY','MEHTA','tmy11@gmail.com',7284840660,'1/2/2020',21,100000,20000,2022,11)


select Job_ID from Practice3.Employee WHERE 'designation' = 'trainee'


select * from Practice3.Job

Select * from Practice3.Employee emp 
inner join Practice3.job J on j.JobId=emp.Job_ID
where j.designation='trainee'