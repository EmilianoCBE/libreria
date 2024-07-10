import { useEffect, useState } from 'react'
import { Row, Col } from "antd";
import { BookItem } from './BookItem';

export const BooksGrid = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('/src/data/books.json')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.library)
      })

    }, [])

  return (
    <>
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
