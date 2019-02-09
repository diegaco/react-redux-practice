import React from 'react';

const Movies = (props) => {

  let movies = props.data.movies
    ? props.data.movies
    : [];
  // return (
  //   <div>Hello world</div>
  // )

  return (
    movies !== null ?
      (
        <ul>
          {
            movies.map(movie => (
              <li key={movie.id}> {movie.name} </li>
            ))
          }
        </ul>
      ) :
      null
  )
};

export default Movies;