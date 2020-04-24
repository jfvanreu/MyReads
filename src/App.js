import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf.js'
import BookSearch from './BookSearch.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  //findBookIndex = (bookID) => (this.state.books.findIndex(x => x.id === bookID))

  updateBookInBooks = ((bookID, status) => {
    //const idx=this.findBookIndex(bookID)
    BooksAPI.get(bookID).then((book) => {
        BooksAPI.update(book, status)
        .then (() => {
            // It's a bit heavy to reload all books but I couldn't get the page to refresh with a single book update
            BooksAPI.getAll().then((books => {
              this.setState(() => ({books}))
            }))
            })
        })
    })
  
  render() {
    return (
        <BrowserRouter>
        <div className="app">
            <Route exact path='/' render={() => (
                <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>    
                        <div className="list-books-content">
                            <Bookshelf books={this.state.books} onBookChange={this.updateBookInBooks}/>
                        </div>
                        <Link className="open-search" to='/search'><button>Add a book</button></Link>
                </div>)} 
            />
            
            <Route path='/search' render={({ history }) => (
                <BookSearch 
                    userBooks={this.state.books} 
                    onBookChange={this.updateBookInBooks}
                    onBookSearch={() => {history.push('/')}}
                />)} 
            />
        </div>
        </BrowserRouter>
        )       
}
}

export default BooksApp


/*update book status in books
                    const temp_books = currentState.books.map((item, j) => {
                        if (j === idx) {
                            const changedItem = item
                            changedItem.shelf = status
                            return changedItem;
                        } else {
                            return item;
                        }
                    })
                    return {temp_books};
                    
*/