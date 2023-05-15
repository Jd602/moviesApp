App to manage movies database. This is developed with NodeJs, 
using express framework, and mysql for database.

First, i create the structure for the project.
Then in the terminal i write => npm init -y

Next i have to install the dependencies of the framework, 
and others tool that i use for this project:
    npm install express ejs nodemon jest

Import of Bootstrap 5
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    
Import of BoxIcons
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

1- Add a new movie
2- Get a specified movie
3- Update an existing movie
4- Get a list of all movies
5- Delete a specified movie
6- Also it must have a favorite section to which you can add and 
remove movies based on what they require

You must also count with a section of filters by year, director, genre 
and favorites where you can use from shape individually or mix more than one.
Must be able to handle codes correctly response and handling exceptions.