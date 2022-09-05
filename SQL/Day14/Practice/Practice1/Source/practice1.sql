CREATE DATABASE MODULE13
USE MODULE13
    
    CREATE TABLE Employee_Test  
    (  
    Emp_ID INT Identity,  
    Emp_name Varchar(100),  
    Emp_Sal Decimal (10,2)  
    )  

    INSERT INTO Employee_Test VALUES ('Anees',1000);  
    INSERT INTO Employee_Test VALUES ('Rick',1200);  
    INSERT INTO Employee_Test VALUES ('John',1100);  
    INSERT INTO Employee_Test VALUES ('Stephen',1300);  
    INSERT INTO Employee_Test VALUES ('Maria',1400);  
	
    CREATE TABLE Employee_Test_Audit  
    (  
    Emp_ID int,  
    Emp_name varchar(100),  
    Emp_Sal decimal (10,2),  
    Audit_Action varchar(100),  
    Audit_Timestamp datetime  
    )  

	--Trigger for inserting 
    ALTER TRIGGER trgAfterInsert ON [dbo].[Employee_Test]   
    FOR INSERT  
    AS  
    declare @empid int;  
    declare @empname varchar(100);  
    declare @empsal decimal(10,2);  
    declare @audit_action varchar(100);  
    select @empid=i.Emp_ID from inserted i;   
    select @empname=i.Emp_Name from inserted i;   
    select @empsal=i.Emp_Sal from inserted i;   
    set @audit_action='Inserted Record -- After Insert Trigger.';    

    insert into Employee_Test_Audit  
    (Emp_ID,Emp_Name,Emp_Sal,Audit_Action,Audit_Timestamp)   
    values(@empid,@empname,@empsal,@audit_action,getdate());  
      
    PRINT 'AFTER INSERT trigger fired.'  
    GO  
	
    insert into Employee_Test values('Prem',2000);  
	 
    Select * from Employee_Test_Audit
	 Select * from Employee_Test
	 ALTER table Employee_Test add Time_stamp date 
	--dhfh

ALTER TABLE Employee_Test
DROP COLUMN Time_stamp;
 

ALTER TRIGGER update_trigger ON [dbo].[Employee_Test]   
AFTER UPDATE
AS
BEGIN
SET NOCOUNT ON;
UPDATE Employee_Test set Time_stamp = GETDATE()
END
GO


--jasfkljalsfkjlasfjlasjflkasjflkjasfljaslfjj


  ALTER TRIGGER Employee_Test_Audit ON [dbo].[Employee_Test]   
    AFTER UPDATE  
    AS  
	BEGIN
    declare @id int;  
	declare @empname varchar(100)
	declare @Emp_Sal Decimal (10,2)
    SELECT @id = Emp_ID FROM inserted  

    IF(NOT EXISTS(SELECT Emp_ID FROM Employee_Test Where Emp_ID=@id))	
    begin
	  INSERT INTO Employee_Test
	  (Emp_ID,Emp_name,Emp_Sal)
	  VAlues(@id,@empname,@Emp_Sal)
	end
	end


	UPDATE Employee_Test
	SET Emp_name = 'XYZ'
	WHERE Emp_ID = 6

	SELECT * FROM update_trigger