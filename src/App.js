import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReadsListBooks from './ListBooksMain';
import { Route } from 'react-router-dom';
import BooksSearch from './BooksSearch';

class BooksApp extends React.Component {
  state = {
    books:[],
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
         searchResult: data
       }))
     })
        console.log(this.state.searchResult)
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
             listBooksSearch={this.state.searchResult}
             />
           )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
