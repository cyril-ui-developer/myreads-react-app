import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import serializeForm from 'form-serialize'
import BookShelf  from './BookShelf ';
import PropTypes from 'prop-types'

class BooksSearch extends Component {
  static propTypes = {
    listBooksSearch: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
   }

  state ={
    search:""
  }

handleChange(e) {
   e.preventDefault()
  this.setState({search: e.target.value})
  console.log(this.state.search)
  if (this.props.onSearchBooks && this.state.search !== ""){
    this.props.onSearchBooks(this.state.search)
  }
}

  render() {
   let listSearchBooks =[];
   listSearchBooks = this.props.listBooksSearch;
   let listBooks = this.props.listBooks;
    let verifiedBooks =[];
    verifiedBooks = listSearchBooks.map(book => {
     listBooks.forEach(bookOnShelf => {
      // check wether book is already on shelf
      if (book.id === bookOnShelf.id) {
        // if yes get the shelf data from BooksOnShelf
        book.shelf = bookOnShelf.shelf;
        
      }
     });
       return book;
    });

    return (    
         <div className="search-books">
            <div className="search-books-bar">
              <Link  to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
               <form  className='create-contact-form'>
                 <input type="text" name="search" value={this.state.search} onChange={this.handleChange.bind(this)}/>
                </form>     
              </div>
            </div>
         
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
              <BookShelf  booksInShelf={ verifiedBooks } onBookShelf={(book, shelf) => {
               this.props.onBookShelfUpdate(book, shelf)
             }}/>

             
           </div>    
    )
  }
}

export default BooksSearch