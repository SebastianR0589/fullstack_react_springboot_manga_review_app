import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [mangas, setMangas] = useState();
  const [manga, setManga] = useState();
  const [reviews, setReviews] = useState([]);

  const getMangas = async () => {
    try {
      const response = await api.get('/api/v1/mangas');

      setMangas(response.data);
    } 
    catch (error) {
      console.log("Error: ", error);
    }
  }

    const getMangaData = async (mangaId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/mangas/${mangaId}`);
        const singleManga = response.data;

        setManga(singleManga);

        setReviews(singleManga.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}></Route>
          <Route path='/' element={<Home mangas={mangas}/>}></Route>
            <Route path="/Reviews/:mangaId" element ={<Reviews getMangaData = {getMangaData} manga={manga} reviews ={reviews} setReviews = {setReviews} />}></Route>
                <Route path="*" element = {<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
