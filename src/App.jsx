import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('/src/data/books.json')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.library)
      })
  }, [])

  console.log(books.map((book) => book.book.title))

  return (
    <div>
      <h1>Books</h1>
      {
        books.map((book, index) => (
          <div key={index}>
            <h2>{book.book.title}</h2>
            <img src={book.book.cover} alt={book.book.title} width={200}/>
          </div>
        ))
      }
    </div>
  )
}

export default App
