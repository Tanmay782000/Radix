use Module1

create schema assignment

CREATE TABLE assignment.Employee(
emp_id int PRIMARY KEY,
emp_name varchar(100) not null,
emp_city varchar(100) not null,
emp_state varchar(100) not null,
emp_country varchar(100) not null,
emp_phoneno BIGINT not null unique,
emp_salary BIGINT not null,
)



CREATE TABLE assignment.Inventory(
car_id int PRIMARY KEY,
car_name varchar(100) not null,
color varchar(100) not null,
chasis_no varchar(100) not null unique,
model varchar(100) not null unique,
engine_no varchar(100) not null unique,
reg_no varchar(100) not null unique,
)

--declare emp_id and car_id as foreign keys using alter keyword
CREATE TABLE assignment.CSales(
SALE_ID int primary key,
EMP_ID int not null,
CAR_ID int not null,
Sale_date date not null,
Cust_payment int not null
)

CREATE TABLE assignment.Commision(

Sales int FOREIGN KEY references assignment.CSales(SALE_ID)

)