import { Col, Row } from "antd"
import { LectureList } from "../App"
import { useContext } from "react"

export const BooksList = () => {
  const {lectureList, setLectureList} = useContext(LectureList)

  console.log(lectureList)
  return (
    <div>
      <h2>Lista de Lectura</h2>
      <Row gutter={{ xs: [8, 8], sm: [16, 16], md: [24, 24], lg: [24, 24] }}>
        {
          lectureList.map((book, index) => (
            
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              key={index}
            >
              
              <div className="book-item">
                <h3>{book.title}</h3>
                <img src={book.cover} alt={book.title} width={200}/>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
