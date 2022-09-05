CREATE DATABASE MODULE11
USE MODULE11

CREATE TABLE BRANCH
(
    BNAME VARCHAR(100) PRIMARY KEY,
    CITY VARCHAR(100) NOT NULL
)
INSERT INTO BRANCH VALUES ('VRCE','NAGPUR'),('AJNI','NAGPUR'),('KAROLBAGH','DELHI'),
('CHANDNI','DELHI'),('DHARAMPETH','NAGPUR'),('M.G.ROAD','BANGLORE'),('ANDHERI','MUMBAI'),
('VIRAR','MUMBAI'),('NEHRU PLACE','DELHI'),('POWAI','MUMBAI')
--Customer Table
CREATE TABLE CUSTOMER
(
    CNAME VARCHAR(100) PRIMARY KEY,
    CITY VARCHAR(100) NOT NULL
)

INSERT INTO CUSTOMER VALUES ('ANIL','KOLKATA'),('SUNIL','DELHI'),
('MEHUL','BARODA'),('MANDAR','PATNA'),('MADHURI','NAGPUR'),('PRAMOD','NAGPUR'),
('SANDIP','SURAT'),('SHIVANI','MUMBAI'),('KRANTI','MUMBAI'),('NAREN','MUMBAI')
CREATE TABLE DEPOSIT
(
    ACTNO VARCHAR(5) PRIMARY KEY,
    CNAME VARCHAR(100),
    BNAME VARCHAR(100),
    AMOUNT INT,
    ADATE DATE,
)

INSERT INTO DEPOSIT VALUES ('100','ANIL','VRCE',1000,'1-Mar-1995')
INSERT INTO DEPOSIT VALUES ('101','SUNIL','AJNI',5000,'4-Jan-1996')
INSERT INTO DEPOSIT VALUES ('102','MEHUL','KAROLBAGH',3500,'17-Nov-1995')
INSERT INTO DEPOSIT VALUES ('104','MADHURI','CHANDNI',1200,'17-Dec-1995')
INSERT INTO DEPOSIT VALUES ('105','PRAMOD','M.G.ROAD',3000,'17-Dec-1995')
INSERT INTO DEPOSIT VALUES ('106','SANDIP','ANDHERI',2000,'27-Mar-1996')
INSERT INTO DEPOSIT VALUES ('107','SHIVANI','VIRAR',1000,'31-Mar-1996')
INSERT INTO DEPOSIT VALUES ('108','KRANTI','NEHRU PLACE',1000,'5-Sep-1995')
INSERT INTO DEPOSIT VALUES ('109','NAREN','POWAI',1000,'2-Jul-1995')
CREATE TABLE BORROW
(
    LOANNO VARCHAR(5) PRIMARY KEY,
    CNAME VARCHAR(100),
    BNAME VARCHAR(100),
    AMOUNT INT,
    FOREIGN KEY(CNAME) REFERENCES CUSTOMER(CNAME),
    FOREIGN KEY(BNAME) REFERENCES BRANCH(BNAME)
)
INSERT INTO BORROW VALUES ('201','ANIL','VRCE',1000)
INSERT INTO BORROW VALUES ('206','MEHUL','AJNI',5000)
INSERT INTO BORROW VALUES ('311','SUNIL','DHARAMPETH',3000)
INSERT INTO BORROW VALUES ('321','MADHURI','ANDHERI',2000)
INSERT INTO BORROW VALUES ('375','PRAMOD','VIRAR',8000)
INSERT INTO BORROW VALUES ('481','KRANTI','NEHRU PLACE',3000)
DROP TABLE BRANCH
DROP TABLE CUSTOMER
DROP TABLE DEPOSIT
DROP TABLE BORROW

SELECT * FROM BRANCH
SELECT * FROM CUSTOMER
SELECT * FROM DEPOSIT
SELECT * FROM BORROW

--find the total counts of customer
SELECT COUNT(CNAME) as count FROM CUSTOMER
WHERE CITY IN (
SELECT CITY FROM BRANCH)


--find the customers according to branch city
SELECT cs.b_city,count(cs.CNAME) as total_customer FROM( 
SELECT DISTINCT CUSTOMER.CITY as c_city,BRANCH.CITY as b_city,CUSTOMER.CNAME FROM CUSTOMER RIGHT JOIN BRANCH on CUSTOMER.CITY = BRANCH.CITY 
)as cs GROUP BY cs.b_city