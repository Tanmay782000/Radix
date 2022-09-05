use Module1

CREATE SCHEMA practice4

CREATE TABLE practice4.JobHistory(
JobHistoryId int Primary key,
type varchar(100) not null,
jobId int not null,
)

CREATE TABLE practice4.Job(
jobId int PRIMARY KEY,
location varchar(100) not null,
company_name varchar(100) not null,
)