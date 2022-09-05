USE [Module1]
GO

/****** Object:  Table [dbo].[Countries]    Script Date: 15-06-2022 19:09:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Countries](
	[CountryID] [nchar](10) NOT NULL,
	[CountryName] [nchar](10) NOT NULL,
	[RegionID] [nchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CountryID] ASC,
	[RegionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Countries]  WITH CHECK ADD CHECK  (([CountryName]='india' OR [CountryName]='italy' OR [CountryName]='china'))
GO