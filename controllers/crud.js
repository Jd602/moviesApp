//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//add a new movie
exports.save = (req, res)=>{
    const movie_name = req.body.movie_name;
    const movie_year = req.body.movie_year;
    const movie_director = req.body.movie_director;
    const movie_duration =req.body.movie_duration;
    const movie_genre = req.body.movie_genre;
    const movie_language = req.body.movie_language;
    
    conexion.query('INSERT INTO movies SET ?',{movie_name:movie_name,movie_year:movie_year, movie_duration:movie_duration,
        movie_director:movie_director, movie_genre:movie_genre, movie_language:movie_language}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});

};
//update the selected movie
exports.update = (req, res)=>{
    const movie_id = req.body.movie_id;
    const movie_name = req.body.movie_name;
    const movie_duration =req.body.movie_duration;
    const movie_director = req.body.movie_director;
    const movie_genre = req.body.movie_genre;
    const movie_language = req.body.movie_language;
    const movie_year = req.body.movie_year;
    
    conexion.query('UPDATE movies SET ? WHERE movie_id = ?',[{movie_id:movie_id, movie_name:movie_name, movie_duration:movie_duration, movie_director:movie_director,  
        movie_genre:movie_genre, movie_language:movie_language, movie_year:movie_year}, movie_id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    });
};