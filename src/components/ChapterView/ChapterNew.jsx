import ChapterEditor from '../ChapterEditor/ChapterEditor';

const ChapterNew = () => {
    const handleAddChapter = async (chapterFormData) => {
        const newChapter = await bookService.createChapter(bookId, chapterFormData);
        setBook({ ...book, chapters: [...book.chapters, newChapter] });};

	return (
       <>
		<ChapterEditor handleAddChapter={handleAddChapter}/>
        </>
    )
}

export default ChapterNew;