// REACT RESOURCE
import { Routes, Route, useNavigate} from "react-router-dom";
import { useState, createContext, useEffect } from "react";

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
import BookForm from './components/BookForm/BookForm';

const App = () => {
	const [user, setUser] = useState(authService.getUser());


	const [books, setBooks] = useState([]);
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

  const handleAddBook = async (bookFormData) => {
    const newBook = await bookService.create(bookFormData);
  setBooks([newBook, ...books]);
  navigate('/books');
};
	return (
		<>
			<NavBar user={user} handleSignout={handleSignout} />
			<Routes>
				{user ? (
					<>
						<Route path="/" element={<Dashboard user={user} />} />
						<Route path="/books" element={<BookList books={books} />} />
            <Route path="/books/:bookId" element={<BookDetails/>} />
          , useNavigate
          <Route path="/books/publish" element={<BookForm handleAddBook={handleAddBook} />} />
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
