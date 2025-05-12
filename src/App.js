
import './App.css';
import Header from './Components/Header';
import "swiper/css/bundle";

import Footer from './Components/Footer';
import {Routes , Route} from 'react-router-dom'
import { lazy, Suspense, useState } from 'react';
import NoPage from './Components/NoPage';
import Loading from './Components/Loading';

const HomeComponent = lazy(() => import('./Pages/Home'))
const MovieGenreComponent = lazy(() => import('./Pages/MovieGenre'))
const DetailComponent = lazy(() => import('./Pages/Detail'))
const FollowsComponent = lazy(() => import('./Pages/Follows'))


function App() {
  const [loading,setLoading] = useState(true);
  return (
    <>
      <Header />
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/webInforMovie' element={<HomeComponent />}/>
            <Route path='/webInforMovie/genres/:idGenre' element={<MovieGenreComponent />} />
            <Route path='/webInforMovie/detail/:idMovie' element={<DetailComponent />} />
            <Route path='/webInforMovie/follow' element={<FollowsComponent />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      <Footer />
    </>
  );
}

export default App;
