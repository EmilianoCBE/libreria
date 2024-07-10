import './BookItem.css'

export const BookItem = (book) => {
  return (
    <div className="book-item">
      <h3>{book.book.title}</h3>
      <img src={book.book.cover} alt={book.book.title} width={200}/>
    </div>
  )
}
