import { useContext } from 'react';
import './BookItem.css';
import { LectureList } from '../App';

export const BookItem = (book) => {
  const {
    lectureList,
    setLectureList,
    setList,
    setListCount,
    booksCount,
    setBooksCount,
  } = useContext(LectureList);

  const bookExistsInLectureList = lectureList.find((item) => item.title === book.book.title);

  const addLectureList = () => {
    if (bookExistsInLectureList) {
      setLectureList(lectureList.filter((item) => item.title !== book.book.title));
      setBooksCount(booksCount + 1);
      setListCount(lectureList.length - 1);
    } else {
      setLectureList([...lectureList, book.book]);
      setBooksCount(booksCount - 1);
      setListCount(lectureList.length + 1);
    }
    setList(true);
  };

  return (
    <div
      className={bookExistsInLectureList ? 'book-item selected' : 'book-item'}
      onClick={addLectureList}
    >
      <h3>{book.book.title}</h3>
      <img src={book.book.cover} alt={book.book.title} width={200} />
    </div>
  );
};