import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ user, handleSignout }) => {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu_book"
			/>
			{user ? (
				<nav className={styles.container}>
					<span className="material-symbols-outlined">menu_book</span>
					<Link to="/">Eunoia</Link>
					<ul>
						<li>
							{" "}
							<button className="button">
								<Link to="/books/publish">Publish</Link>
							</button>
						</li>
						{/* <li>
							{" "}
							<button className="button">
								<Link to="/books/">Books</Link>
							</button>
						</li> */}
						<li>
							<button id="signs">
								<Link to="" onClick={handleSignout}>
									Sign Out
								</Link>
							</button>
						</li>
					</ul>
				</nav>
			) : (
				<nav>
					<ul>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default NavBar;
