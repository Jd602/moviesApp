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

##Inserts, dataset

INSERT INTO movies (movie_name, movie_duration, movie_director, movie_genre, movie_language, movie_year) VALUES
('Pulp Fiction', 154, 'Quentin Tarantino', 'Crime, Drama', 'English', 1994),
('Forrest Gump', 142, 'Robert Zemeckis', 'Drama, Romance', 'English', 1994),
('The Shawshank Redemption', 142, 'Frank Darabont', 'Drama', 'English', 1994),
('The Lion King', 89, 'Roger Allers, Rob Minkoff', 'Animation, Adventure, Drama', 'English', 1994),
('Toy Story', 81, 'John Lasseter', 'Animation, Adventure, Comedy', 'English', 1995),
('Braveheart', 178, 'Mel Gibson', 'Action, Biography, Drama', 'English', 1995),
('The Usual Suspects', 106, 'Bryan Singer', 'Crime, Mystery, Thriller', 'English', 1995),
('Heat', 170, 'Michael Mann', 'Action, Crime, Drama', 'English', 1995),
('Independence Day', 145, 'Roland Emmerich', 'Action, Adventure, Sci-Fi', 'English', 1996),
('Fargo', 98, 'Joel Coen, Ethan Coen', 'Crime, Drama, Thriller', 'English', 1996),
('Good Will Hunting', 126, 'Gus Van Sant', 'Drama, Romance', 'English', 1997),
('Titanic', 194, 'James Cameron', 'Drama, Romance', 'English', 1997),
('Saving Private Ryan', 169, 'Steven Spielberg', 'Drama, War', 'English', 1998),
('The Truman Show', 103, 'Peter Weir', 'Comedy, Drama, Sci-Fi', 'English', 1998),
('The Sixth Sense', 107, 'M. Night Shyamalan', 'Drama, Mystery, Thriller', 'English', 1999),
('American Beauty', 122, 'Sam Mendes', 'Drama, Romance', 'English', 1999),
('Gladiator', 155, 'Ridley Scott', 'Action, Adventure, Drama', 'English', 2000),
('Memento', 113, 'Christopher Nolan', 'Mystery, Thriller', 'English', 2000),
('The Lord of the Rings: The Fellowship of the Ring', 'English', 2006);
