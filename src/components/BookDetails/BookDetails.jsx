import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import * as bookService from '../../services/bookService';
import { Link } from "react-router-dom";
// import { AuthenticatedUserContext } from '../../App';


const BookDetails = (props) => {

const { bookId } = useParams();
console.log('bookId', bookId);
const [book, setBook] = useState(null);
// const user = useContext(AuthedUserContext);

useEffect(() => {
    const fetchBook = async () => {
      const bookData = await bookService.show(bookId);
      console.log('bookData', bookData);
      setBook(bookData);
    };
    fetchBook();
  }, [bookId]);
  
  if (!book) return <main>Loading...</main>;


  return (
    <main>
      <header>
        <p>{book.category.toUpperCase()}</p>
        <h1>{book.title}</h1>
        <p>
          {book.author.username} posted on
          {new Date(book.createdAt).toLocaleDateString()}
        </p>
        {/* {book.author._id === user._id && (
					<>
						<button onClick={() => props.handleDeleteBook(bookId)}>
							Delete
						</button>
					</>
                    	)} */}
      </header>
      <p>{book.text}</p>
      <section>
        <h2>Comments</h2>
      </section>
    </main>
  );
  
};
export default BookDetails;