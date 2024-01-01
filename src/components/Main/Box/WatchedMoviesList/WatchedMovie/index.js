import React from 'react';

//Presentational Component

const WatchedMovie = ({ imdbID, imdbRating, Poster, Title, userRating, runtime, onDeleteWatched })=>
{
  return (    
  <li>
    <img src={Poster} alt={`${Title} poster`} />
    <h3>{Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{runtime} mins</span>
      </p>
      <button className='btn-delete' onClick={()=> onDeleteWatched(imdbID)}>X</button>
    </div>
  </li>)
}

export default WatchedMovie;