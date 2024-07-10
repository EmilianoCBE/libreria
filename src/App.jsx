import { createContext, useState } from 'react'
import './App.css'
import { BooksLayout } from './components/BooksLayout'

export const LectureList = createContext()

function App() {
  const [list, setList] = useState(false)
  const [lectureList, setLectureList] = useState([])

  return (
    <LectureList.Provider value={{
      list,
      setList,
      lectureList,
      setLectureList
    }}>
      <h1>Librería Fantasía</h1>

      <BooksLayout />
    </LectureList.Provider>
  )
}

export default App
