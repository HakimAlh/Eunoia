import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "../Dashboard/Dashboard.module.css";
import { useState, useEffect, useContext } from "react";
import * as bookService from "../../services/bookService";

const Dashboard = (props) => {
	console.log(props.books);
	return (
		<>
			<section className={styles.about}>
				<header>
					<h1>Today's Feature:</h1>

					<Link
						style={{ fontSize: "50px", color: "white" }}
						to="/books/67e44194ede0c59181f2a656"
					>
						Enigma X!
					</Link>

					<h6>Novel - Non-Fiction</h6>
					<hr />
					<p>
						The famous Hudson Fran a genius Criminologist after a fatal accident
						that <br />
						gave him acquired savant syndrome. And his partner the infamous 'X'{" "}
						<br />
						An Ethical Hacker that cracked an unsolved case that was going on{" "}
						<br />
						for decades!
					</p>
				</header>
				<article></article>
			</section>

			<div style={{ height: "200px" }}>
				<main className={styles.container}>
					{props.books.map((book) => (
						<Link key={book._id} to={`/books/${book._id}`}>
							<article>
								<header>
									<img
										style={{
											height: "180px",
											width: "130px",
											border: "solid 1px",
										}}
										src={book.cover}
										alt=""
									/>
									<h2>{book.title}</h2>
									<p>Category: {book.category}</p>
								</header>
							</article>
						</Link>
					))}
				</main>
			</div>
		</>
	);
};

export default Dashboard;
