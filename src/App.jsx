/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// @ts-nocheck
import Header from './Components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setbookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
