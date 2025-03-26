import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

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
								<div key={chapter._id}>
									<h1>{chapter.title}</h1>
									<p>{chapter.content}</p>
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

export default ChapterView;
