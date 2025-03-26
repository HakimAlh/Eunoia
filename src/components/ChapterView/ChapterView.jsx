import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styles from "../ChapterView/ChapterView.module.css";

const ChapterView = (props) => {
	const { chapterId } = useParams();
	const { bookId } = useParams();
	console.log("chapterId = " + chapterId);
	console.log("bookId = " + bookId);
	console.log(props.books);
	const [chapters, setChapters] = useState(props.currentChapters);

	// useEffect(() => {
	// 	setChapters(props.currentChapters);
	// 	console.log("chapters:", chapters);
	// }, []);

	return (
		<>
			{props.books.map((book) => {
				if (bookId === book._id) {
					let div = null;
					book.chapters.map((chapter) => {
						if (chapterId === chapter._id) {
							div = (
								<div className='chapter'key={chapter._id}>
									<main className={styles.container}>
										<div class="card text-center">
											<div class="card-header">Chapter: {chapter.title}</div>
											<div class="card-body">
												<h5 class="card-title"></h5>
												<h1 style={content}>{chapter.content}</h1>
											</div>
										</div>
									</main>
								</div>
							);
						}
					});
					return div;
				}
			})}
		</>
	);
};

const content = {
    fontSize: "20px",
    textAlign: "left",
    margin: "20px",
    padding: "50px",
    wordSpacing: "5px",
    lineHeight: "45px"

}

export default ChapterView;
