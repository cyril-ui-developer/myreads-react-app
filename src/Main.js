import React, { Component } from 'react';
import BookShelf  from './BookShelf ';
import { Link } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types'

class Main extends Component {

   static propTypes = {
    listBooks: PropTypes.array.isRequired,
    onBookShelfUpdate: PropTypes.func.isRequired
   }

  render() {

    return (
        <div className="list-books-content">
          <div>
             <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
               <BookShelf  booksInShelf={ this.props.listBooks.filter((book) => book.shelf === 'currentlyReading')} 
                           onBookShelf={(book, shelf) => {
                           this.props.onBookShelfUpdate(book, shelf)
                  }} />
              </div>
               <div className="bookshelf">
               <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelf  booksInShelf={ this.props.listBooks.filter((book) => book.shelf === 'wantToRead') } 
                          onBookShelf={(book, shelf) => {
                          this.props.onBookShelfUpdate(book, shelf)
                  }}/>
              </div>
             <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <BookShelf  booksInShelf={ this.props.listBooks.filter((book) => book.shelf === 'read')}
                            onBookShelf={(book, shelf) => {
                            this.props.onBookShelfUpdate(book, shelf)
                  }}/>
              </div>
          </div>
          <div className="open-search">
             <Link to='/search'>Add a book</Link>
           </div>
        </div>        
    )
  }
}

export default Main