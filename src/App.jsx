/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// @ts-nocheck
import Header from './Components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
