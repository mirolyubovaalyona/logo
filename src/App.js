import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import axios from 'axios'
import React, { Component , useState, useEffect} from 'react'

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3001/categories').then((response) => {
      setPost(response.data);
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
}

export default App
