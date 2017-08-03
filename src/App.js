import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReadsListBooks from './ListBooksMain';
import { Route } from 'react-router-dom';
import BooksSearch from './BooksSearch';

class BooksApp extends React.Component {
  state = {
    books:[],
    searchBooks:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    searchResult:[]
  }
 
  componentDidMount(){
     BooksAPI.getAll().then((data) => {
        this.setState({
         books:data 
        })
     })
  }

 searchBooks(book) {
   console.log(book)
    BooksAPI.search(book,20).then(data => {
       this.setState(state => ({
         searchBooks: data
       }))
     })
        console.log(this.state.searchResult)
   }

 createBook(book, shelf) {
   let curBook = book;
   curBook.shelf = shelf;
    BooksAPI.update(book, shelf).then(b => {
       this.setState(state => ({
         
         books: state.books.concat([ curBook ])
       }))
            console.log(curBook)
                 console.log(shelf)
     })
   }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path="/" render={() =>(
             <MyReadsListBooks listBooks={this.state.books} />
          )} />
           <Route path='/search' render={({ history }) => (
           <BooksSearch 
           onSearchBooks={(book) => {
               this.searchBooks(book)
              // history.push('/')
             }}
             listBooksSearch={this.state.searchBooks}

             onBookShelf={(book, shelf) => {
               this.createBook(book, shelf)
               history.push('/')
               console.log(book)
             }}
             />
           )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
