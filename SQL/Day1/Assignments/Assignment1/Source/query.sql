ALTER TABLE assignment.CSales ADD constraint fk_EMPID FOREIGN KEY (EMP_ID) references [assignment].[Employee](emp_id)

ALTER TABLE assignment.CSales ADD constraint fk_CARID FOREIGN KEY (CAR_ID) references [assignment].[Inventory](car_id)