import React, { Component } from 'react';
import BookShelf  from './BookShelf ';
import { Link } from 'react-router-dom';
import './App.css';

class Main extends Component {
  render() {
    let currentReadingBooks = this.props.listBooks.filter((book) => book.shelf === 'currentlyReading');
    let wantToReadBooks = this.props.listBooks.filter((book) => book.shelf === 'wantToRead');
    let readBooks = this.props.listBooks.filter((book) => book.shelf === 'read');

    return (
        <div className="list-books-content">
          <div>
             <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
               <BookShelf  booksInShelf={ currentReadingBooks} onBookShelf={(book, shelf) => {
                     this.props.onBookShelfUpdate(book, shelf)
                  }} />
              </div>
               <div className="bookshelf">
               <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelf  booksInShelf={ wantToReadBooks } onBookShelf={(book, shelf) => {
                     this.props.onBookShelfUpdate(book, shelf)
                  }}/>
              </div>
             <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <BookShelf  booksInShelf={ readBooks } onBookShelf={(book, shelf) => {
                     this.props.onBookShelfUpdate(book, shelf)
                  }}/>
              </div>
          </div>
           <Link to='/search' className="open-search">Add a book</Link>
        </div>        
    )
  }
}

export default Main