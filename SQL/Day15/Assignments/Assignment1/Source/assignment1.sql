use module15

CREATE TABLE ACC1
(
ID INT PRIMARY KEY,
NAME VARCHAR(100),
ADDRESS VARCHAR(100),
ACC_NO BIGINT,
B_NAME VARCHAR(100),
AMOUNT BIGINT
)

INSERT INTO ACC1 VALUES(1,'TANMAY','BARODA',23423423,'SANGAM',80000)
INSERT INTO ACC1 VALUES(2,'VIR','NAGPUR',56566559,'ALKAOURI',20000)
INSERT INTO ACC1 VALUES(3,'RAM','SURAT',98787387,'MEERA',60000)
INSERT INTO ACC1 VALUES(4,'JAY','ANAND',98474362,'FATEHPURA',90000)

delete from ACC1 

SELECT * FROM ACC1

--set isolation level read committed & begin transaction name as T1
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRAN T1
DECLARE @ID_1 INT
DECLARE @ID_2 INT
SET @ID_1 = 3
SET @ID_2 = 4
BEGIN TRY
UPDATE ACC1 SET AMOUNT = AMOUNT - 150 WHERE ID = @ID_1
if(exists (select * from ACC1 where ID = @ID_2))
begin
UPDATE ACC1 SET AMOUNT = AMOUNT + 150 WHERE ID = @ID_2
PRINT 'Transection successfully done'
COMMIT TRAN T1
end
else
begin
ROLLBACK TRAN T1
PRINT 'acc not exist'
end
END TRY
BEGIN CATCH
PRINT 'TRANSACTION FAILED'
END CATCH
commit tran T1
