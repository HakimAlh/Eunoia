import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BookList = (props) => {
	const { bookId } = useParams();
	console.log("bookId", bookId);

	return (
        <main>
          {props.books.map((book) => (
            <Link key={book._id} to={`/books/${book._id}`}>
              <article>
                <header>
                  <h2>{book.title}</h2>
                  <p>
                    Author: {book.author.username}
                  </p>
                </header>
                <p>Category: {book.category}</p>
              </article>
            </Link>
          ))}
        </main>
      );
};

export default BookList;
