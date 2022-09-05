USE [Module7]
GO
/****** Object:  Table [dbo].[assignment1]    Script Date: 24-06-2022 10:39:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[assignment1](
	[id] [int] NOT NULL,
	[name] [varchar](100) NOT NULL,
	[er_no] [int] NOT NULL,
	[address] [varchar](100) NOT NULL,
	[salary] [int] NULL,
	[department] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[assignment1] ([id], [name], [er_no], [address], [salary], [department]) VALUES (1, N'ram', 721, N'baroda', 60000, N'Web developer')
INSERT [dbo].[assignment1] ([id], [name], [er_no], [address], [salary], [department]) VALUES (2, N'shyam', 722, N'surat', 80000, N'Web Developer')
INSERT [dbo].[assignment1] ([id], [name], [er_no], [address], [salary], [department]) VALUES (3, N'mahesh', 723, N'navsari', 30000, N'mobile developer')
INSERT [dbo].[assignment1] ([id], [name], [er_no], [address], [salary], [department]) VALUES (4, N'vir', 724, N'anand', 15000, N'tester')
GO

--Table Name: Employee Write a query to rank employees based on their salary for a month Select 4th Highest salary from employee table using ranking function Get department, total salary with respect to a department from employee table.
WITH cust AS(SELECT name,department,salary,dense_RANK() OVER (ORDER BY salary DESC) AS my_rank FROM assignment1)
SELECT * from cust where my_rank = 4

-- from employee table order by salary ascending Get department wise minimum salary from employee table order by salary ascending
WITH cust AS(SELECT department,sum(salary) as sal from  assignment1 group by department)
SELECT * FROM cust order by sal asc

--from employee table order by salary ascending Get department wise minimum salary from employee table order by salary Decending
WITH cust AS(SELECT department,sum(salary) as sal from  assignment1 group by department)
SELECT * FROM cust order by sal desc

--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
WITH cust AS(SELECT department,sum(salary) as sal from  assignment1 group by department)
SELECT * FROM cust where sal > 5000 order by sal desc

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH cust AS(SELECT emp.Emp_Id,emp.First_name,emp.Last_name,emp.Joining_date,inc.Incentive_date FROM assignment22.employee as emp INNER JOIN assignment22.incentives as inc on emp.Emp_Id = inc.Emp_ref_id)
SELECT First_name,Last_name,DATEDIFF(yy,Joining_date,Incentive_date) as Total_DIff from cust

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
WITH cust AS(SELECT * FROM assignment22.employee as emp INNER JOIN assignment22.incentives as inc on emp.Emp_Id = inc.Emp_ref_id)
SELECT First_name,Incentive_amount FROM cust WHERE Incentive_amount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
WITH cust AS(SELECT * FROM assignment22.employee as emp LEFT OUTER JOIN assignment22.incentives as inc on emp.Emp_Id = inc.Emp_ref_id)
SELECT * FROM CUST

--Select EmployeeName, ManagerName from the employee table.

WITH cust AS(SELECT emp.First_name,emp.Manager_Id from assignment22.employee as emp)
SELECT * FROM cust

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

WITH cust AS(SELECT * FROM assignment22.employee as emp full OUTER JOIN assignment22.incentives as inc on emp.Emp_Id = inc.Emp_ref_id)
SELECT Emp_Id,First_name,isnull(Incentive_amount,0) as incentive_amount from cust where Incentive_amount is NULL


