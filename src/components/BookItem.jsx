import { useContext } from 'react'
import './BookItem.css'
import { LectureList } from '../App'

export const BookItem = (book) => {
  const {lectureList, setLectureList, setList} = useContext(LectureList)

  const addLectureList = () => {
    setLectureList([...lectureList, book.book])
    setList(true)
  }


  return (
    <div className="book-item" onClick={addLectureList}>
      <h3>{book.book.title}</h3>
      <img src={book.book.cover} alt={book.book.title} width={200}/>
    </div>
  )
}
