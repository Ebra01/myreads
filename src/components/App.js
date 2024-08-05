import "../static/App.css";
import BooksList from "./Books/BooksList";

function App() {

  return (
    <div className="app">
      <BooksList />
    </div>
  );
}

export default App;


/*

<div className="app">
  {showSearchPage ? (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  ) : (
      <div className="open-search">
        <button onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
      </div>
  )}
</div>

*/