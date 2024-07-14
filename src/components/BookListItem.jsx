import { useContext } from 'react';
import { LectureList } from '../App';
import './BookListItem.css';

export const BookListItem = (book) => {
  const {lectureList, setLectureList, setList, setListCount, listCount} = useContext(LectureList)
  const unlistBook = lectureList.filter((item) => item.title !== book.title)

  const subLectureList = () => {
    setLectureList(unlistBook)
    setListCount(listCount - 1)
    lectureList.length === 1 && setList(false)
  }

  return (
    <div className="booklist-item" onClick={subLectureList}>
      <h3>{book.title}</h3>
      <img src={book.cover} alt={book.title} width={200}/>
    </div>
  )
}
