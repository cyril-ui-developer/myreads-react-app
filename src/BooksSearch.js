import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import serializeForm from 'form-serialize'

class BooksSearch extends Component {

handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values)
    if (this.props.onSearchBooks){
    this.props.onSearchBooks(values.search)
    }
}

  render() {
   console.log(this.props.listBooksSearch)
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
                <ol className="books-grid" > {this.props.listBooksSearch.map((book) => (
                  <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author) => (
                          <div className="book-authors">{author}</div>
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