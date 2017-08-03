import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import serializeForm from 'form-serialize'

class BooksSearch extends Component {

handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    //console.log(values)
    if (this.props.onSearchBooks){
    this.props.onSearchBooks(values.search)
    }
}

handleSubmit2 = (e) => {
    e.preventDefault()
    const shelf = serializeForm(e.target, { hash: true })
   // const shelf = e.target.value
    const currentBook = this.bookRef;
    console.log(shelf)
   // if (this.props.onBookShelf){
    this.props.onBookShelf(currentBook, shelf )
   // }
}

  render() {
   console.log(this.props.listBooksSearch)
   let listSearchBooks =[];
   listSearchBooks = this.props.listBooksSearch;

    return (
        
         <div className="search-books">
            <div className="search-books-bar">
              <Link  to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
               <form onSubmit={this.handleSubmit} className='create-contact-form'>
                  <input type="text" name="search" placeholder="Search by title or author"/>
                </form>
              </div>
            </div>
         
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
      
              <div className="bookshelf-books">
                <ol className="books-grid" > {listSearchBooks.map((book, index) => (
                  <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                          <form className='create-contact-form'>
                            <select value={book.shelf}   ref={(select) => { this.bookRef = book; }} onChange={this.handleSubmit2}>
                              <option value="none" disabled>Move to...</option>
                              <option name="currentlyReading" value={book}>Currently Reading</option>
                              <option name="wantToRead" value={book}>Want to Read</option>
                              <option name="read" value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </form>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author,i) => (
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

export default BooksSearch