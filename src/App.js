import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReadsListBooks from './ListBooksMain';

class BooksApp extends React.Component {
  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }
 
   componentDidMount(){
     BooksAPI.getAll().then((data) => {
        this.setState({
         books:data 
        })
     })

 
 
 }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <MyReadsListBooks listBooks={this.state.books} />
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
