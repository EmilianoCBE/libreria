import { BooksGrid } from "./BooksGrid"
import { BooksList } from "./BooksList"
import "./BooksLayout.css"
import { useContext } from "react"
import { LectureList } from "../App"

export const BooksLayout = () => {

  const {list} = useContext(LectureList)

  return (
    <div className="layout-container">
      <div className="layout-grid">
        <BooksGrid />
      </div>
      <div className={
        list ? "layout-list" : "layout-list hidden"
      }>
        <BooksList />
      </div>
    </div>
  )
}
