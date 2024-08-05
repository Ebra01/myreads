import Books from "./Books";

const BookShelf = ({ books, title, category, changeCategory }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <Books books={books} category={category} changeCategory={changeCategory} />
      </div>
    </div>
  )

}

export default BookShelf;