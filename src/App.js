import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main';
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
 
  getBooks(){
    BooksAPI.getAll().then((data) => {
        this.setState({
         books:data 
        })
     }).catch(function(e) {
        console.log(e); 
    });
  }
  componentDidMount(){
     this.getBooks();
  }

 searchBooks(book) {    
    BooksAPI.search(book,20).then(data => {
       this.setState(state => ({
         searchBooks: data
       })
       ) 
     }
     
     ).catch(function(e) {
        console.log(e); 
    })
    
   }

 updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(b => {
       this.setState(state => ({     
         books: state.books.filter(b => b.id !== book.id).concat([book])
       }))
         this.getBooks();
     }).catch(function(e) {
    });
   }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path="/" render={() =>(
             <Main listBooks={this.state.books}
               onBookShelfUpdate={(book, shelf) => {
               this.updateBook(book, shelf)
               }}
              />
           )} />
           <Route path='/search' render={({ history }) => (
           <BooksSearch 
             onSearchBooks={(book) => {
               this.searchBooks(book)
             }}
             listBooksSearch={this.state.searchBooks}
             listBooks={this.state.books}
             onBookShelfUpdate={(book, shelf) => {
               this.updateBook(book, shelf)
             }}
             />
           )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
