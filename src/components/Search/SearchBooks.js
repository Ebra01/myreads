import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../api/BooksAPI";
import Books from "../Books/Books";
import QueryBooks from "./QueryBooks";

const SearchBooks = () => {

  const [qBooks, setQ] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {

    let mounted = true;

    const getMyBooks = async() => {
      const res = await BooksAPI.getAll();
      setMyBooks(res.filter(b => b.shelf));
    }

    if (mounted) {
      getMyBooks();
    }

    return () => {
      mounted = false;
    }

  }, [])


  const setCategory = async(book, shelf) => {

    await BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setQ(qBooks.filter(b => b.id !== book.id));

  }

  return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <QueryBooks myBooks={myBooks} setQuery={setQ} />
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Books books={qBooks} changeCategory={setCategory} />
        </ol>
      </div>
    </div>

  );

}

export default SearchBooks;