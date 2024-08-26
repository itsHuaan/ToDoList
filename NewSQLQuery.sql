CREATE TABLE Tasks (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(255) NOT NULL,
    Description NVARCHAR(MAX),
    IsCompleted BIT NOT NULL DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
INSERT INTO Tasks (Title, Description, IsCompleted)
VALUES ('Finish Report', 'Complete the monthly report', 0);
SELECT * FROM Tasks;
