import * as BooksAPI from "../../api/BooksAPI";

const QueryBooks = ({myBooks, setQuery}) => {
  
  const handleQuery = async(e) => {
    let query = e.target.value;
    
    if (query.length === 0) {
      setQuery([]);
      return;
    }

    const res = await BooksAPI.search(query, 20);
    if (res instanceof Array) {
      setQuery(res.filter(b => !myBooks.some(mb => mb.id === b.id)));
    } else {
      setQuery([]);
    }
  }

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        onChange={handleQuery}
      />
    </div>
  )

}

export default QueryBooks;