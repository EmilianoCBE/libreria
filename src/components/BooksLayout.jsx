import { BooksGrid } from "./BooksGrid"
import { BooksList } from "./BooksList"

export const BooksLayout = () => {
  return (
    <div className="layout-container">
      <BooksGrid />
      <BooksList />
    </div>
  )
}
