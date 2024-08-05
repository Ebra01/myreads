import { useEffect, useState } from "react";
import BookShelf from "./Bookshelf";
import * as BooksAPI from "../../api/BooksAPI";

const CURRENT = "currentlyReading";
const WANT = "wantToRead";
const READ = "read";

const BooksList = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [crBooks, setCR] = useState([]);
  const [wrBooks, setWR] = useState([]);
  const [rBooks, setR] = useState([]);

  useEffect(() => {

    let mounted = true;

    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setCR(res.filter(b => b.shelf === CURRENT));
      setWR(res.filter(b => b.shelf === WANT));
      setR(res.filter(b => b.shelf === READ));
    }

    if (mounted) {
      getBooks();
    }

    return () => {
      mounted = false;
    }
    
  }, []);

  const changeCategory = async(book, shelf) => {
    let oldShelf = book.shelf;
    await BooksAPI.update(book, shelf);
    
    // Update book's shelf (UI)
    book.shelf = shelf;

    // Remove book from old shelf (UI)
    if (oldShelf === CURRENT) {
      setCR(crBooks.filter(b => b.id !== book.id));
    } else
    if (oldShelf === WANT) {
      setWR(wrBooks.filter(b => b.id !== book.id));
    } else
    if (oldShelf === READ) {
      setR(rBooks.filter(b => b.id !== book.id));
    }

    // Add book to new shelf (UI)
    if (shelf === CURRENT) {
      setCR(crBooks.concat(book));
    } else
    if (shelf === WANT) {
      setWR(wrBooks.concat(book));
    } else
    if (shelf === READ) {
      setR(rBooks.concat(book));
    }

  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={crBooks} title={"Currently Reading"} category={CURRENT} changeCategory={changeCategory} />
          <BookShelf books={wrBooks} title={"Want to Read"} category={WANT} changeCategory={changeCategory} />
          <BookShelf books={rBooks} title={"Read"} category={READ} changeCategory={changeCategory} />
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
      </div>
    </div>
  )

}

export default BooksList;