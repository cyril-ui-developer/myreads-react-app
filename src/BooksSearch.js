import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import serializeForm from 'form-serialize'
import BookShelf  from './BookShelf ';


class BooksSearch extends Component {


handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
   
    if (this.props.onSearchBooks){
    this.props.onSearchBooks(values.search)
    }
}



  render() {
   //console.log(this.props.listBooksSearch)
 
   let bookShelf
     console.log(this.bookShelf)
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
              <BookShelf  booksInShelf={ listSearchBooks } onBookShelf={(book, shelf) => {
                console.log(book) 
               this.props.onBookShelfUpdate(book, shelf)
               console.log(shelf)
                  }}/>
{this.bookShelf}
             
           </div>    
    )
  }
}

export default BooksSearch