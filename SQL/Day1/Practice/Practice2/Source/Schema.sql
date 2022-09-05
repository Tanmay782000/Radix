USE [Module1]
GO

/****** Object:  Table [dbo].[JobHistory]    Script Date: 15-06-2022 19:11:17 ******/

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[JobHistory](
	[EmployeeID] [numeric](18, 0) NULL,
	[Start_date] [date] NULL,
	[End_date] [nchar](10) NULL,
	[Job_Id] [numeric](18, 0) NULL,
	[Department_Id] [numeric](18, 0) NULL,
	CHECK (End_Date like '[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]'),
) ON [PRIMARY]
GO


