import { useState } from 'react'


function App() {
  
  const API_KEY = import.meta.env.VITE_API_KEY
  console.log(API_KEY);
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=pacific rim`
  console.log(url);
  

  return (
    <>
      
    </>
  )
}

export default App
