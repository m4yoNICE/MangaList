CREATE DATABASE mangaDB;

USE mangaDB;

CREATE TABLE manga (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    description TEXT,
    imageUrl VARCHAR(255)
);