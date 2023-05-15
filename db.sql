CREATE DATABASE toc;

USE DATABASE toc;

CREATE TABLE movies (
  movie_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(50),
  movie_duration INT(6),
  movie_director VARCHAR(50),
  movie_genre VARCHAR(50),
  movie_language VARCHAR(50),
  movie_year INT(5)
);

CREATE TABLE favorites (
  id INT(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  duration INT(6),
  director VARCHAR(50),
  genre VARCHAR(50),
  language VARCHAR(50),
  year INT(5),
  PRIMARY KEY (id)
);

SHOW TABLES;
DESC 