import { Link } from 'react-router-dom';


const BookList = (props) => {
    return (
        <main>
          {props.books.map((book) => (
            <Link key={book._id} to={`/books/${book._id}`}>
              <article>
                <header>
                  <h2>{book.title}</h2>
                </header>
                <p>{book.category}</p>
              </article>
            </Link>
          ))}
        </main>
      );
  };

export default BookList