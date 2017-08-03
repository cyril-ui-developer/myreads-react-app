import React, { Component } from 'react';



class CurrentlyReading extends Component {

handleSubmit2 = (e) => {
    e.preventDefault()
    //const values = serializeForm(e.target, { hash: true })
    const currentBook = this.bookRef;
    console.log(this.bookRef)
   // if (this.props.onBookShelf){
    this.props.onBookShelf(currentBook, currentBook.shelf )
   // }
}
  render() {

    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" > {this.props.currentReadingBooks.map((book, i) => (
                  <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} ref={(select) => { this.bookRef = book; }} onChange={this.handleSubmit2}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
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
            </div>      
    )
  }
}

export default CurrentlyReading