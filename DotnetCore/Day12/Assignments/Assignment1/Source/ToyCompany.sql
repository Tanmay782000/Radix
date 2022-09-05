create database ToyCompany
use ToyCompany

Create table Department
(
DeptID int primary key,
DeptName varchar(100),
)

Create table ToyManufectoringDetails
(
ToyID int primary key,
DeptID int foreign key references Department(DeptID),
ModelNo bigint,
Guarantee varchar(10),
warrenty varchar(10),
Price bigint
)

Create table Customer(
CustomerID int primary key,
CustName varchar(100),
CustEmail varchar(100),
CustAddress varchar(100),
CustPhone bigint,
)

Create table Placed_Orderes
(
OrderID int primary key,
ToyID int foreign key references ToyManufectoringDetails(ToyID),
CustomerID int foreign key references Customer(CustomerID),
AddressOfDelivery varchar(100) not null,
)
