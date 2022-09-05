USE Module9


CREATE TABLE Assignment(
name varchar(50),
Address varchar(100),
City varchar(100),
DOB Date,
Standard varchar(50)
)

--defind the JSON 
Declare @Student_data NVARCHAR(MAX)
SET @Student_data  = N'[
{"Name":"Ram","Address":"Gujarat","City":"Vadodara","DOB":"12-2-2021","Standard":"10th"},
{"Name":"Shyam","Address":"Maharashtra","City":"Nagpur","DOB":"7-7-2020","Standard":"7th"},
{"Name":"Vir","Address":"Gujarat","City":"Surat","DOB":"5-5-2022","Standard":"9th"},
{"Name":"Jay","Address":"Gujarat","City":"Navsari","DOB":"12-2-2021","Standard":"10th"},
{"Name":"Harsh","Address":"Gujarat","City":"Surat","DOB":"12-2-2021","Standard":"5th"}
]'
PRINT @Student_data

INSERT INTO Assignment
SELECT Name,Address,City,DOB,Standard FROM OPENJSON(@Student_data)
WITH(
Name NVARCHAR(100) '$.Name',
Address NVARCHAR(100) '$.Address',
City NVARCHAR(100) '$.City',
DOB NVARCHAR(100) '$.DOB',
Standard NVARCHAR(100) '$.Standard'
)

SELECT * FROM Assignment --In TABLE FORMAT

SELECT(SELECT * FROM Assignment FOR JSON AUTO) as Table_data_into_JSON-- IN JSON FORMAT

