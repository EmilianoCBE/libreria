import { useContext } from 'react';
import { LectureList } from '../App';
import './BookListItem.css';

export const BookListItem = (book) => {
  const {lectureList, setLectureList} = useContext(LectureList)
  const unlistBook = lectureList.filter((item) => item.title !== book.title)

  const subLectureList = () => {
    console.log(unlistBook)
    setLectureList(unlistBook)
  }

  return (
    <div className="booklist-item" onClick={subLectureList}>
      <h3>{book.title}</h3>
      <img src={book.cover} alt={book.title} width={200}/>
    </div>
  )
}
