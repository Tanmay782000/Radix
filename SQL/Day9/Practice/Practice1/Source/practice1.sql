CREATE DATABASE Module9


CREATE TABLE #information(
id int primary key,
name varchar(100),
address varchar(100),
phone_no bigint,
)


SELECT * FROM #information

ALTER TABLE #information add skills varchar(100)

CREATE TABLE #info1(
id int primary key,
name varchar(100)
)

ALTER TABLE #info1 ADD skills varchar(100)

CREATE TABLE #info2(
address varchar(100),
phone_no bigint
)

DECLARE @json NVARCHAR(MAX);
SET @json = N'[  
  {"id": 2, "info": {"name": "John", "address": "vadodara"}, "age": 25,"phone_no":"2342342343"},
  {"id": 5, "info": {"name": "Jane", "address": "surat", "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00","phone_no":"9090900343"}  
]';

SELECT id,firstName,address,phone_no,skills from OPENJSON(@json)
WITH(
id INT '$.id',
firstName NVARCHAR(50)'$.info.name',
address NVARCHAR(50)'$.info.address',
phone_no NVARCHAR(50)'$.info.phone_no',
skills NVARCHAR(MAX)'$.info.skills' AS JSON
)

SELECT * FROM OPENJSON(@JSON)

TRUNCATE TABLE #info1

INSERT INTO #info1
SELECT id,name,skills from #information;

SELECT * 
FROM #info1
CROSS APPLY STRING_SPLIT(skills, ',');


SELECT 
    value  
FROM 
    STRING_SPLIT('red,green,,blue', ',')
WHERE
    TRIM(value) <> '';




SELECT * FROM #info1



