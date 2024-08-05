import ChangeCategory from "./ChangeCategory";

const Books = ({ books, changeCategory }) => {

  return (
    <ol className="books-grid">
      {
        books.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                      `url("${book.imageLinks?.thumbnail}")`,
                  }}
                ></div>
                <ChangeCategory book={book} changeCategory={changeCategory} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors?.join(", ")}</div>
            </div>
          </li>
        ))
      }
    </ol>
  );

}

export default Books;