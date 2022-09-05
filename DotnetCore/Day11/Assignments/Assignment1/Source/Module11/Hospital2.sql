use hospital2
create database hospital2

Create table department(
DepartmentID int Primary key, 
DepartmentName varchar(100),
)

Create table DoctorDetails(
DoctorID int primary key,
DepartmentID int foreign key references department(DepartmentID),
Name varchar(100),
Education varchar(100),
Specialization varchar(100)
)

Create table PatientDetails(
PatientID int primary key,
DepartmentID int foreign key references department(DepartmentID),
DoctorID int foreign key references DoctorDetails(DoctorID),
HcaID int foreign key references HealthCareAssistant(HcaID),
Name varchar(100),
Address varchar(100),
PhoneNo bigint,
BloodGroup varchar(10),
)

insert into PatientDetails values(1,2,1,'Aakash Gupta','vadodara',7687698868,'A+')
insert into PatientDetails values(2,2,2,'Mahesh Shah','surat',7687698868,'O+')
insert into PatientDetails values(3,2,3,'Nill Brahmbhatt','navsari',7687698868,'B+')
insert into PatientDetails values(4,2,1,'Amish Devgan','dang',7687698868,'A')

insert into HealthCareAssistant values(3,3,'Pritesh joshi','anand','MBBS',9897897676,2)

Create table HealthCareAssistant(
HcaID int primary key,
DepartmentID int foreign key references department(DepartmentID),
name varchar(100),
Address varchar(100),
Education varchar(100),
PhoneNo varchar(100),
)

create table Drugs(
DrugID int primary key,
DrugName varchar(100),
DrugType varchar(100),
DrugUse varchar(100)
)

create table report(
ReportId int primary key,
PatientID int foreign key references PatientDetails(PatientID),
DoctorID int foreign key references DoctorDetails(DoctorID),
Drugs int foreign key references Drugs(DrugID),
Dosage varchar(100),
Summery varchar(100),
Price bigint
)


select * from HealthCareAssistant
select * from DoctorDetails
select * from PatientDetails
select * from DrugsDetails
select * from department
select * from HealthCareAssistant
select * from report



alter PROCEDURE Get_Report(@PatientID int)
AS
begin
select rp.ReportId,pt.PatientID,pt.Name,pt.BloodGroup,String_agg(ast.name,',') as assistants,dg.DrugName,rp.Summery,rp.Price from report as rp join PatientDetails pt on rp.PatientID = pt.PatientID join HealthCareAssistant as ast on pt.PatientID = ast.PatientId join Drugs as dg on rp.Drugs = dg.DrugID
where rp.PatientID = @PatientID
group by rp.reportID,pt.PatientId,pt.Name,rp.Summery,rp.Price,dg.DrugName,pt.BloodGroup
end


alter table HealthCareAssistant drop column PatientId

alter table HealthCareAssistant add PatientId int foreign key references PatientDetails(PatientID)

