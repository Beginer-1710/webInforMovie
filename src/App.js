
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';

import "swiper/css/bundle";
import Home from './Pages/Home';
import Footer from './Components/Footer';
import {Routes , Route} from 'react-router-dom'
import MovieGenre from './Pages/MovieGenre';
import Detail from './Pages/Detail';
import { useState } from 'react';
import Follows from './Pages/Follows';
function App() {
  const [loading,setLoading] = useState(true);
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/genres/:idGenre' element={<MovieGenre />} />
          <Route path='/detail/:idMovie' element={<Detail />} />
          <Route path='/follow' element={<Follows />} />
        </Routes>
      <Footer />
    </>

  );
}

export default App;
