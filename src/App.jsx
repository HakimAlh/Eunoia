// REACT RESOURCE
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { useState, createContext, useEffect } from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";

//AUTH
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";

//SERVICES
import * as bookService from "./services/bookService";
import * as authService from "../src/services/authService";

//BOOKS
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import BookForm from "./components/BookForm/BookForm";
import ChapterEditor from "./components/ChapterEditor/ChapterEditor";
import ChapterNew from "./components/ChapterView/ChapterNew";

const App = () => {
	const [user, setUser] = useState(authService.getUser());
	const [books, setBooks] = useState([]);
	const [chapters, setChapters] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAllBooks = async () => {
			const booksData = await bookService.index();
			setBooks(booksData);
		};
		if (user) fetchAllBooks();
	}, [user]);

	const handleSignout = () => {
		authService.signout();
		setUser(null);
	};


	// CRUD
	const handleAddBook = async (bookFormData) => {
		const newBook = await bookService.create(bookFormData);
		setBooks([newBook, ...books]);
		navigate("/books");
	};

	const handleDeleteBook = async (bookId) => {
		const deletedBook = await bookService.deleteBook(bookId);
		setBooks(books.filter((book) => book._id !== deletedBook._id));
		navigate("/books");
	};

	const handleUpdateBook = async (bookId, bookFormData) => {
		const updatedBook = await bookService.update(bookId, bookFormData);

		setBooks(books.map((book) => (bookId === book._id ? updatedBook : book)));

		navigate(`/books/${bookId}`);
	};


	// // CHAPTER CRUD
	// const handleAddChapter = async (chapterFormData) => {
	// 	const newChapter = await bookService.create(chapterFormData);
	// 	setBook({ ...books, chapters: [...books.chapters, newChapter] });
	// 	navigate(`/books/ChapterNew`);
	// };



	//
	return (
		<>
			<NavBar user={user} handleSignout={handleSignout} />
			<Routes>
				{user ? (
					<>
						<Route path="/" element={<Dashboard user={user} />} />
						<Route path="/books" element={<BookList books={books} />} />
						<Route
							path="/books/:bookId"
							element={<BookDetails handleDeleteBook={handleDeleteBook} />}
						/>
						<Route
							path="/books/:bookId/edit"
							element={<BookForm handleUpdateBook={handleUpdateBook} />}
						/>
						<Route
							path="/books/:bookId/chapter"
							// element={<ChapterEditor handleAddChapter={handleAddChapter}/>}
						/>
						<Route
							path="/books/:bookId/ChapterNew"
							element={<ChapterNew />}
						/>
						, useNavigate
						<Route
							path="/books/publish"
							element={
								<BookForm
									handleAddBook={handleAddBook}
									handleUpdateBook={handleUpdateBook}
								/>
							}
						/>
					</>
				) : (
					<Route path="/" element={<Landing />} />
				)}

				<Route path="/signup" element={<SignupForm setUser={setUser} />} />
				<Route path="/signin" element={<SigninForm setUser={setUser} />} />
			</Routes>
		</>
	);
};

export default App;
