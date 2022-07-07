
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
import NoPage from './Components/NoPage';

function App() {
  const [loading,setLoading] = useState(true);
  return (
    <>
      <Header />
        <Routes>
          <Route path='/webInforMovie' element={<Home />}/>
          <Route path='/webInforMovie/genres/:idGenre' element={<MovieGenre />} />
          <Route path='/webInforMovie/detail/:idMovie' element={<Detail />} />
          <Route path='/webInforMovie/follow' element={<Follows />} />

          <Route element={<NoPage />} />
        </Routes>
      <Footer />
    </>

  );
}

export default App;
