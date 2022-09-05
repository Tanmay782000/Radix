create database JSON_Auth

use JSON_Auth

create table UserModel(
id int primary key IDENTITY(1,1),
Username varchar(100),
EmailAddress varchar(100),
Role varchar(100)
)

insert into UserModel values('Ramesh','r@gmail.com','Admin')
insert into UserModel values('Vir','v@gmail.com','User')