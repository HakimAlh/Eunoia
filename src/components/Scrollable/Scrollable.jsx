


function ScrollableComponent(props) {
    return (
      <div style={{ height: '200px', overflow: 'scroll', flexDirection: 'row' }}>
         {props.books.map((book) => (
              <Link key={book._id} to={`/books/${book._id}`}>
                <article>
                  <header>
                    <h2>{book.title}</h2>
                    <img src="{book.image}" alt="" />
                    <p>
  
                    </p>
                  </header>
                  <p>Category: {book.category}</p>
                </article>
              </Link>
            ))}
      </div>
    );
  }
  
  export default ScrollableComponent;