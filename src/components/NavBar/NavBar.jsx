import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ user, handleSignout }) => {
	return (
		<>
			{user ? (
				<nav className={styles.container}>
					<Link to="/">Eunoia</Link>
					<ul>
						<li>
							{" "}
							<button class="button">
								<Link to="/books/publish">Publish</Link>
							</button>
						</li>
						<li>
							{" "}
							<button class="button">
								<Link to="/books/">Books</Link>
							</button>
						</li>
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
