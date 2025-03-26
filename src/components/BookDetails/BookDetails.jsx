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
				<p style={{  fontSize: '30px'}}>{book.category.toUpperCase()}</p>
			<img style={{ height: '350px', alignItems: 'left'}} src={book.cover}></img>
				<h1>{book.title}</h1>
				
				<p>
					Authored By: {book.author.username} 
				</p>
				{/* {book.author._id === user._id && ( */}
				<>
				<div style={{  padding: '20px'}}>
                    <Link to={`/books/${bookId}/edit`}>Edit</Link>
					<Link to={`/books/${bookId}/ChapterNew`}>Add</Link>
					<button style={{  padding: '20px'}}onClick={() => props.handleDeleteBook(bookId)}>Delete</button>
					</div>
				</>
				{/* )} */}
			</header>
			<p>{book.text}</p>
			<div style={{ height: '200px', overflow: 'scroll', flexDirection: 'column' }}>
			</div>
			<hr/>
			<h3>Description</h3>
			<h6 style={{  textAlign: 'center'}}> {book.description}</h6>
			<section>
				<hr/>
				<h2>Chapters</h2>
				<hr/>
				{book.chapters.map((chapter) => (
					
					 <Link key={chapter._id} to={`/books/${bookId}/${chapter._id}`}>
						<ul>
					  <li>{chapter.title}</li>
					  </ul>
					  </Link>
          ))}
			</section>
		</main>
	);
};
export default BookDetails;
