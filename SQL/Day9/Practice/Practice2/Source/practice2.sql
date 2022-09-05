Use Module9

CREATE TABLE PRACTICE2 (
name varchar(200),
L_name nvarchar(200)
)

insert into PRACTICE2 values('vir','das')

CREATE TABLE #INFO(
name varchar(100)
)
CREATE TABLE #INFO2(
NAME VARCHAR(200)
)
--check diff b/w  varchar and nvarchar 
INSERT INTO PRACTICE2 VALUES(N'پیرا,',N'پیرا, ')

SELECT * FROM PRACTICE2

--insert data into info2 table & the data fetching from OPENJSON 
INSERT INTO #INFO2
SELECT * FROM OPENJSON(@JSONDATA)
WITH(
name NVARCHAR(MAX) '$.INFORMATION' AS JSON
)


--Store the JSON DATA into JSONDATA variable
DECLARE @JSONDATA NVARCHAR(MAX);
SET @JSONDATA = '{"INFORMATION":{"name":"tanmay","lname":"mehta"}}'

--Check mentioned JSON is in valid format or not 
SELECT ISJSON(@JSONDATA) as VALIDJSON

--Modified the json
SET @JSONDATA = JSON_MODIFY(@JSONDATA,'$.INFORMATION.name','VIshwa');
SELECT modify = @JSONDATA
SELECT * FROM OPENJSON(@JSONDATA)

--print the name which stored in sql variable
declare @sql nvarchar(200)
SELECT @sql = name
FROM PRACTICE2
print @sql


DECLARE @JSONDATA2 NVARCHAR(MAX);
SET @JSONDATA2 = '{"INFORMATION":{"name":"tanmay","lname":"mehta"}}'
print @JSONDATA2
SELECT JSON_VALUE(@JSONDATA2,'$.INFORMATION.name')as schname

--select the value
SELECT JSON_VALUE(@JSONDATA,'$.INFORMATION.name')as schname

--insert the object in info
INSERT INTO #INFO
SELECT JSON_QUERY(@JSONDATA,'$.INFORMATION') 



SELECT * FROM #INFO
DROP TABLe #INFO
