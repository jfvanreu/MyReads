import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookChange: PropTypes.func.isRequired
  }

  render() {
    
    const shelves = [
                {shelfID:'currentlyReading', label: 'Currently Reading'},
                {shelfID: 'wantToRead', label:'Want to Read'},
                {shelfID: 'read', label:'Read'}
                ]
    
    const { books, onBookChange } = this.props
    
    return(
        shelves.map((shelf) => (
            <div key={shelf.shelfID}>
                <h2 className="bookshelf-title">{shelf.label}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === shelf.shelfID).map((book) => (
                        <li key={book.id}>
                            <Book key={book.id} book={book} shelves={shelves} onBookChange={onBookChange}/>
                        </li>    
                      ))}
                    </ol>
                </div>
            </div>
    )))
  
  }
}

export default Bookshelf;