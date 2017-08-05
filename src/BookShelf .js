import React, { Component } from 'react';


class BookShelf  extends Component {

handleSelectChange = (book, e) => {
    e.preventDefault()
    const value = e.target.value;
    
   if (this.props.onBookShelf){
       this.props.onBookShelf(book, value)
    }
}
render() {

    return (
              <div className="bookshelf-books">
                <ol className="books-grid" > {this.props.booksInShelf.map((book, i) => (
                  <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">             
                            <select value={book.shelf} onChange={this.handleSelectChange.bind(this, book)}>
                              <option value="none" disabled>Move to...</option>
                              <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                              <option name="wantToRead" value="wantToRead">Want to Read</option>
                              <option name="read" value="read">Read</option>
                              <option name="none" value="none">None</option>
                            </select>      
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author, i) => (
                          <div key={i} className="book-authors">{author}</div>
                        ))}
                      </div>
                  </li>
                ))}
                </ol>
              </div>
       
    )
  }
}

export default BookShelf 