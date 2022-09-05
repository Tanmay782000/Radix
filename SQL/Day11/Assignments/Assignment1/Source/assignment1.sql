SELECT * FROM CUSTOMER
SELECT * FROM BRANCH
SELECT * FROM DEPOSIT
SELECT * FROM BORROW
--Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name
CREATE PROCEDURE my_pros 
@customer_name varchar(100)
AS
Select CNAME,D.BNAME from DEPOSIT D where D.BNAME In (
Select B.BNAME from CUSTOMER C
inner join BRANCH B on C.CITY=B.CITY
where C.CNAME=@customer_name
)

EXECUTE my_pros @Customer_name = 'MADHURI'

--Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account
CREATE PROCEDURE my_pros2 
@cs_name varchar(199)
AS
SELECT CNAME FROM DEPOSIT WHERE BNAME IN ( SELECT BNAME FROM DEPOSIT WHERE CNAME = @cs_name ) FOR JSON AUTO
EXECUTE my_pros2 @cs_name = 'MADHURI'

--Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city
CREATE PROCEDURE my_pros3 
@count_customer VARCHAR(100)
AS
SELECT CITY,COUNT(CNAME) TOTAL_CUSTOMERS FROM CUSTOMER WHERE CITY IN(
seleCT CITY FROM CUSTOMER WHERE CITY = @count_customer
)GROUP BY CITY

EXECUTE my_pros3 @count_customer = 'MUMBAI'

-- Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI 


CREATE PROCEDURE my_pros4
@country_name varchar(100)
AS
if(@country_name = 'MUMBAI' OR @country_name = 'Delhi')
begin
SELECT CNAME FROM CUSTOMER WHERE CITY in(SELECT CITY FROM BRANCH WHERE CITY = @country_name) FOR JSON AUTO
end
else
begin
PRINT 'ONLY MUMBAI AND DEHLI CITY NAMES ALLOWed TO ENTER'
end

EXECUTE my_pros4 @country_name = 'Mumbai'


--Q5: Count the Number of Customers Living in the City where Branch is Located
SELECT cs.b_city,count(cs.CNAME) as total_customer FROM( 
SELECT DISTINCT CUSTOMER.CITY as c_city,BRANCH.CITY as b_city,CUSTOMER.CNAME FROM CUSTOMER RIGHT JOIN BRANCH on CUSTOMER.CITY = BRANCH.CITY 
)as cs GROUP BY cs.b_city


--Q6: Create a Procedure which will accept input in JSON parameter CustomerName, City, ACTNO, Branch, amount And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than  10Rs. and date should always be current date.


ALTER PROCEDURE my_pros5(
@Student_data NVARCHAR(MAX)
)
AS
IF(CAST(JSON_VALUE(@Student_data,'$.ADATE') as date) =  CAST(GETDATE() as date) AND CAST(JSON_VALUE(@Student_data,'$.AMOUNT')as int) > 5)
begin
INSERT INTO DEPOSIT
SELECT ACTNO,CNAME,BNAME,AMOUNT,ADATE FROM OPENJSON(@Student_data)
with(
ACTNO varchar(100), 
CNAME varchar(100),
BNAME varchar(100),
AMOUNT int,
ADATE date
)
end
ELSE
begin
PRINT 'not matching the requirements'
end

Declare @Student_data NVARCHAR(MAX)
SET @Student_data  = '
{"ACTNO":"192","CNAME":"klkljkl","BNAME":"jklghj","AMOUNT":96,"ADATE":"2022-07-07"}
'
EXECUTE my_pros5 @Student_data

SELECT * FROM BRANCH
SELECT CAST( GETDATE() AS Date ) ;

SELECT * FROM DEPOSIT