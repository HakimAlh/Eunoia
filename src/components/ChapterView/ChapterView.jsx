
const ChapterView = () => {
    
    return (
        <>
        {book.chapters.map((chapter) => (
          <article key={chapter._id}>
            <header>
              <p>
                {chapter.author.username} posted on
                {new Date(chapter.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{chapter.text}</p>
          </article>
        ))}
        </>
    )
}

export default ChapterView;