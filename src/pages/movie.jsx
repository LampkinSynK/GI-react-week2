import React from 'react'
import { useEffect } from 'react'
// https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=b1aa595c6b4b2532db2b113ed555bda1

export default function Movie() {
    useEffect(()=> {
        let search = document.getElementById('movieSearch')
        search.addEventListener('keyup', function() {
            getMovie(search.value)
        })
    })

    const getMovie = (movie) => {
        const movieList = document.getElementById('movieList')
        movieList.innerHTML=''

        fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=b1aa595c6b4b2532db2b113ed555bda1`).then((res)=> {
            res.json().then((data)=> {
                if (!data.results[0]){
                    movieList.innerHTML=''
                }else {
                    data.results.forEach(movie => {
                        const newMovie = document.createElement('div')
                        console.log(data.results)
                        const posterPath = 'https://www.themoviedb.org/t/p/w220_and_h330_face/' +movie.poster_path
                        newMovie.innerHTML = `<img src=${posterPath}><p>${movie.title}</p>`
                        movieList.appendChild(newMovie) 
                    })
                    
                }
            })
        })
    }

  return (
    <div>
        <form id='movies'>
            <input id='movieSearch' type="text" />

        </form>
        <div id='movieList'></div>
    </div>
  )
}
