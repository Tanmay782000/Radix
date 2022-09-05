use Module1
ALTER TABLE practice4.JobHistory ADD constraint fk_jobId FOREIGN KEY (jobId) references [practice4].[Job](jobId)

ALTER TABLE practice4.JobHistory ADD Location varchar(100)