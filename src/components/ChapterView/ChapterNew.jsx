import * as bookService from "../../services/bookService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ChapterEditor from "../ChapterEditor/ChapterEditor";

const ChapterNew = (props) => {
	const { bookId } = useParams();
	const [book, setBook] = useState(null);
	useEffect(() => {
		const fetchBook = async () => {
			const bookData = await bookService.show(bookId);

			setBook(bookData);
		};
		fetchBook();
	}, [bookId]);


	const handleAddChapter = async (chapterFormData) => {
		const newChapter = await bookService.createChapter(bookId, chapterFormData);
		setBook({ ...book, chapter: [...book.chapters, newChapter] });
	};

	return (
		<>
			<ChapterEditor handleAddChapter={handleAddChapter} />
		</>
	);
};

export default ChapterNew;
