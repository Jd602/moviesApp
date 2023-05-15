const express = require('express');
const router = express.Router();

const conn = require('./database/db');

const crud = require('./controllers/crud');

router.post('/save', crud.save);
router.post('/update', crud.update);

router.get('/index', (req, res)=>{
    conn.query('SELECT * FROM movies', (err, results)=>{
        if(err){
            throw err;
        } else {
            res.render('index', {results: results});
        }
    })
})

//to add movies
router.get('/add', (req,res)=>{
    conn.query('SELECT * FROM favorites', (err, results)=>{
        if(err){
            throw err;
        } else {
            res.render('add', {results: results});
        }
    })
})

//load favorite view
router.get('/fav', (req,res)=>{
    
    conn.query('SELECT * FROM favorites', (err, results)=>{
        if(err){
            throw err;
        } else {
            res.render('fav', {results: results});
        }
    })
    
})

//to update the movie data
router.get('/update/:movie_id', (req,res)=>{
    const movie_id = req.params.movie_id;
    conn.query('SELECT * FROM movies WHERE movie_id=?',[movie_id], (err, results)=>{
        
        if(err){
            throw err;
        } else {
            res.render('update', {movie: results[0]});
        }
    })
})

//deletes selected movie
router.get('/delete/:movie_id', (req, res) => {
    const movie_id = req.params.movie_id;
    conn.query('DELETE FROM movies WHERE movie_id = ?',[movie_id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

router.get('/addFavorite/:movie_id', (req, res) => {
    const id = req.params.movie_id;

    conn.query('SELECT * FROM movies WHERE movie_id=?', [id], (err,result)=>{
        if(err){
            throw err;
        } else{
            const name = result[0]['movie_name'];
            const year = result[0]['movie_year'];
            const director = result[0]['movie_director'];
            const duration = result[0]['movie_duration'];
            const genre = result[0]['movie_genre'];
            const language = result[0]['movie_language'];

            conn.query('SELECT * FROM favorites WHERE id=?', [id], (error, results)=>{
                if(error){
                    console.log(error);
                }else{
                    if (results.length > 0) {
                        res.redirect('/');
                    } else {
                        conn.query('INSERT INTO favorites VALUES (?, ?, ?, ?, ?, ?, ?)',
                         [id, name, duration, director, genre,language, year], (error, results)=>{
                            if(error){
                                console.log(error);
                            }else{
                                res.redirect('/');
                            }
                        })
                    }
                }
            })
        }
    });
});

//deletes selected movie from favorites
router.get('/deleteFavorite/:id', (req, res) => {
    const id = req.params.id;
    conn.query('DELETE FROM favorites WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

router.get('/search', (req, res) => {
    
    const { id, year, director } = req.query;
    
    // Construir la consulta SQL con WHERE para filtrar los resultados según los valores de búsqueda
    let sql = 'SELECT * FROM movies WHERE 1=1';
    if (id) sql += ` AND id=${id}`;
    if (year) sql += ` AND year=${year}`;
    if (director) sql += ` AND director='${director}'`;
  
    // Ejecutar la consulta en la base de datos
    conn.query(sql, (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error al buscar películas');
      } else {
        res.render('search', { results });
      }
    });
  });
  

module.exports = router;