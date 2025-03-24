import ChapterEditor from '../ChapterEditor/ChapterEditor';

const ChapterView = (props) => {
    const handleAddChapter = async (chapterFormData) => {
        const newChapter = await chapterService.createChapter(bookId, chapterFormData);
        setBook({ ...book, chapters: [...book.chapters, newChapter] });};

	return (
		<>
        <ChapterEditor  handleAddChapter={handleAddChapter}/>
        </>
    )
}

export default ChapterView;