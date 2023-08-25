import { useState } from 'react'
import './App.css'

import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default App
