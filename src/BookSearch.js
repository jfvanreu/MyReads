import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {
  static propTypes = {
    onBookChange: PropTypes.func.isRequired
  }
  
  state = {
    query: '',
    foundBooks: []
  }
  
  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
      foundBooks: []
    }))
    this.validateQuery(query)
  }
  
  validateQuery = (query) => {
        const searchKeywords = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 
                            'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 
                            'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 
                            'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 
                            'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
                            'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 
                            'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 
                            'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 
                            'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 
                            'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 
                            'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 
                            'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 
                            'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 
                            'Virtual Reality', 'Web Development', 'iOS']
        
        const userBooks = this.props.userBooks
        
        searchKeywords.includes(query) &&
            (BooksAPI.search(query).then((foundBooks) => {
                this.setState(() => {
                        foundBooks.map((foundBook) => {   
                        const idx = userBooks.findIndex(x => (x.id === foundBook.id))
                        if (idx > 0) {
                            foundBook.shelf = userBooks[idx].shelf
                        } else {
                            foundBook.shelf = "None"
                        }
                        return {foundBook}
                    })
                    return{foundBooks}
                    })
            }))
    }
    
  render() {
    const { query, foundBooks } = this.state

    const shelves = [
                {shelfID:'currentlyReading', label: 'Currently Reading'},
                {shelfID: 'wantToRead', label:'Want to Read'},
                {shelfID: 'read', label:'Read'}
                ]
    
    return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                          {foundBooks.map((book) => (
                            <li key={book.id}>
                                <Book key={book.id} book={book} shelves={shelves} onBookChange={this.props.onBookChange}/>
                            </li>    
                          ))}
                        </ol>
                    </div>
            </div>
        )
    }
}

export default BookSearch
