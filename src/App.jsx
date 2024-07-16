import { createContext, useState } from 'react'
import './App.css'
import { BooksLayout } from './components/BooksLayout'

export const LectureList = createContext()

function App() {
  const [list, setList] = useState(false)
  const [lectureList, setLectureList] = useState([])
  const [booksCount, setBooksCount] = useState(0)
  const [listCount, setListCount] = useState(() =>{
      const saved = localStorage.getItem('lectureList')
      const initialValue = JSON.parse(saved)
      return initialValue || []
    }
  )

  return (
    <LectureList.Provider value={{
      list,
      setList,
      lectureList,
      setLectureList,
      booksCount,
      setBooksCount,
      listCount,
      setListCount
    }}>
      <h1>Bookstore</h1>

      <BooksLayout />
    </LectureList.Provider>
  )
}

export default App
