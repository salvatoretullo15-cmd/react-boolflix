import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import SerieTv from './pages/SerieTv';
import Film from './pages/Film';
import Originali from './pages/Originali';
import AggiuntiDiRecente from './pages/AggiuntiDiRecente';
import LaMiaLista from './pages/LaMiaLista';

function App() {
  
  const API_KEY = import.meta.env.VITE_API_KEY
  console.log(API_KEY);
  const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=pacific rim`
  console.log(url);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Serie tv" element={<SerieTv/>}/>
            <Route path="/Film" element={<Film/>}/>
            <Route path="/Originali" element={<Originali/>}/>
            <Route path="/Aggiunti di recente" element={<AggiuntiDiRecente/>}/>
            <Route path="/La mia lista" element={<LaMiaLista/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
