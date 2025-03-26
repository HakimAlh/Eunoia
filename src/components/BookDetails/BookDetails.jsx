import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import * as bookService from "../../services/bookService";
import { Link } from "react-router-dom";
// import { AuthenticatedUserContext } from '../../App';
import styles from '../BookDetails/BookDetails.module.css'

const BookDetails = (props) => {
	const { bookId } = useParams();
	console.log("bookId", bookId);
	const [book, setBook] = useState(null);
	// const user = useContext(AuthedUserContext);

	useEffect(() => {
		const fetchBook = async () => {
			const bookData = await bookService.show(bookId);
			console.log("bookData", bookData);
			setBook(bookData);
			// props.settingCurrentBook(bookData)
		};
		fetchBook();
	}, [bookId]);

	if (!book) return <main>Loading...</main>;

	
	return (
		<main className={styles.container}>
			<header>
				<p>{book.category.toUpperCase()}</p>
				<h1>{book.title}</h1>
				<p>
					{book.author.username} posted on
					{new Date(book.createdAt).toLocaleDateString()}
				</p>
				{/* {book.author._id === user._id && ( */}
				<>
					<button onClick={() => props.handleDeleteBook(bookId)}>Delete</button>
                    <Link to={`/books/${bookId}/edit`}>Edit</Link>
					<Link to={`/books/${bookId}/ChapterNew`}>Add a Chapter</Link>
					<Link to={`/books/${bookId}/ChapterView`}>Read</Link>
				</>
				{/* )} */}
			</header>
			<p>{book.text}</p>
			<section>
				<h2>Chapters</h2>
				<hr/>
				{book.chapters.map((chapter) => (
					
					 <Link key={chapter._id} to={`/books/${bookId}/${chapter._id}`}>
					  <h2>{chapter.title}</h2>
					  </Link>
          ))}
			</section>
		</main>
	);
};
export default BookDetails;
