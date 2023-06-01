import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Art from './components/Art'
import Blog from './components/Blog'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    // else scroll to id
    if (hash === '') {
      const element = document.getElementById('section-top')
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [pathname, hash, key]) // do this on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Art />} />
          <Route path="/blog" index element={<Blog />} />
          <Route path="/projects" index element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
