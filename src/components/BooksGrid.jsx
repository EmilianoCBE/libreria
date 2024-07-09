import { useEffect, useState } from 'react'
import { Row, Col } from "antd";

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
              <div>
                <h3>{book.book.title}</h3>
                <img src={book.book.cover} alt={book.book.title} width={200}/>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  )
}
