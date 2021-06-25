USE [Intricom]
GO

/****** Object:  Table [dbo].[Notes]    Script Date: 21/06/2021 11:06:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HotelBooking](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HotelId] [int] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ClientId] [int] NOT NULL,
 CONSTRAINT [PK_HotelBooking] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [dbo].[Hotel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Hotel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [dbo].[Client](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](9) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

INSERT INTO dbo.Hotel VALUES('Hotel 1','Calle Hotel 1, 1 - Palma', GETDATE())
INSERT INTO dbo.Hotel VALUES('Hotel 2','Calle Hotel 2, 2 - Barcelona', GETDATE())
INSERT INTO dbo.Hotel VALUES('Hotel 3','Calle Hotel 3, 3 - Madrid', GETDATE())
INSERT INTO dbo.Hotel VALUES('Hotel 4','Calle Hotel 4, 4 - Málaga', GETDATE())
INSERT INTO dbo.Hotel VALUES('Hotel 5','Calle Hotel 4, 1 - Jaén', GETDATE())

INSERT INTO dbo.Client VALUES('Rafael','Calle 1 - Palma', '666555444', GETDATE())
INSERT INTO dbo.Client VALUES('Juan','Calle 2 - Palma', '666777888', GETDATE())
INSERT INTO dbo.Client VALUES('Marta','Calle 3 - Palma', '666333111', GETDATE())
INSERT INTO dbo.Client VALUES('Carmen','Calle 4 - Palma', '666999888', GETDATE())
INSERT INTO dbo.Client VALUES('Isidro','Calle 5 - Palma', '666333999', GETDATE())

INSERT INTO dbo.HotelBooking VALUES(1,'Hotel Booking 1','Address 1', GETDATE(), 1)
INSERT INTO dbo.HotelBooking VALUES(1,'Hotel Booking 2','Address 2', GETDATE(), 3)
INSERT INTO dbo.HotelBooking VALUES(2,'Hotel Booking 3','Address 3', GETDATE(), 4)
INSERT INTO dbo.HotelBooking VALUES(4,'Hotel Booking 4','Address 4', GETDATE(), 2)
INSERT INTO dbo.HotelBooking VALUES(5,'Hotel Booking 5','Address 5', GETDATE(), 5)