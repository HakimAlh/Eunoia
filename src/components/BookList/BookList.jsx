import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from '../BookList/BookList.module.css';


const BookList = (props) => {
  console.log( props.books)
	return (
        <main className={styles.container}>
          {props.books.map((book) => (
            <Link key={book._id} to={`/books/${book._id}`}>
              <article>
                <header>
                  <h2>{book.title}</h2>
                  <img src="{book.image}" alt="" />
                  <p>

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
