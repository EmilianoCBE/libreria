import { useContext, useEffect, useState } from 'react'
import { Row, Col } from "antd";
import { BookItem } from './BookItem';
import { LectureList } from '../App';

export const BooksGrid = () => {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState('all')
  const {booksCount, setBooksCount} = useContext(LectureList)

    useEffect(() => {
      fetch('/src/data/books.json')
        .then((response) => response.json())
        .then((data) => {
          setBooksCount(data.library.length)
          if (filter === 'all') {
            return setBooks(data.library)
          } else {
            const filteredBooks = data.library.filter((book) => book.book.genre === filter)
            setBooks(filteredBooks)
            setBooksCount(filteredBooks.length)
          }
        })

    }, [filter, setBooksCount])

    const setFilterBooks = (filter) => {
      setFilter(filter)
    }

  return (
    <>
      <h3>Books Avaiable: {booksCount}</h3>
      <select
        value={filter}
        onChange={(e) => setFilterBooks(e.target.value)}
      >    
        <option value="all">All</option>
        <option value="Fantasía">Fantasy</option>
        <option value="Ciencia ficción">Fiction</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </select>
      <Row gutter={{ xs: [8, 8], sm: [16, 16], md: [24, 24], lg: [24, 24] }}>
        {
          books.map((book, index) => (
            
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={{
                flex: "25%",
              }}
              key={index}
            >
              
              <BookItem {...book}/>
            </Col>
          ))
        }
      </Row>
    </>
  )
}
