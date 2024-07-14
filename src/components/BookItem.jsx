import { useContext } from 'react'
import './BookItem.css'
import { LectureList } from '../App'

export const BookItem = (book) => {
  const {lectureList, setLectureList, setList, setListCount} = useContext(LectureList)
  const bookExists = lectureList.find((item) => item.title === book.book.title)

  const addLectureList = () => {
    if (bookExists) return
    setLectureList([...lectureList, book.book])
    setList(true)
    setListCount(lectureList.length + 1)
  }

  return (
    <div className={
      bookExists ? "book-item selected" : "book-item"
    } onClick={addLectureList}>
      <h3>{book.book.title}</h3>
      <img src={book.book.cover} alt={book.book.title} width={200}/>
    </div>
  )
}
