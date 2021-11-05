import React from 'react'
import './App.css'
import Carousel from './components/carousel'

const slides = [
  {
    src: 'https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg',
  },
  {
    src: 'https://klike.net/uploads/posts/2019-05/medium/1556707997_5.jpg',
  },
]

function App() {
  return <Carousel slides={slides} />
}

export default App
