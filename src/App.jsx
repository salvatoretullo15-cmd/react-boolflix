import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import SerieTv from './pages/SerieTv';
import Film from './pages/Film';
import Originali from './pages/Originali';
import AggiuntiDiRecente from './pages/AggiuntiDiRecente';
import LaMiaLista from './pages/LaMiaLista';

function App() {
  
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/SerieTv" element={<SerieTv/>}/>
            <Route path="/Film" element={<Film/>}/>
            <Route path="/Originali" element={<Originali/>}/>
            <Route path="/AggiuntiDiRecente" element={<AggiuntiDiRecente/>}/>
            <Route path="/LaMiaLista" element={<LaMiaLista/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
