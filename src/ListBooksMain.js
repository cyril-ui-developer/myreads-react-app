import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import { Link } from 'react-router-dom';
import './App.css';

class MyReadsListBooks extends Component {

  render() {
    let currentReadingBooks = this.props.listBooks.filter((book) => book.shelf === 'currentlyReading');
    let wantToReadBooks = this.props.listBooks.filter((book) => book.shelf === 'wantToRead');
    let readBooks = this.props.listBooks.filter((book) => book.shelf === 'read');

    return (
        <div className="list-books-content">
          <div>
            <CurrentlyReading currentReadingBooks={ currentReadingBooks } />
            <WantToRead wantToReadBooks={ wantToReadBooks }/>
            <Read readBooks={ readBooks }/>
          </div>
           <Link to='/search' className="open-search">Add a book</Link>
        </div>        
    )
  }
}

export default MyReadsListBooks