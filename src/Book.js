import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onBookChange: PropTypes.func.isRequired
  }

  state = {
    bookStatus: this.props.book.shelf 
  }
  
  handleBookStatusChange = (bookID, status) => {
    this.setState({bookStatus: status})
    this.props.onBookChange(bookID, status)
  }
  
  render() {

    const { book, shelves } = this.props
    const writers = (book.authors) ? book.authors : ["No Author"]
    const backgroundImg = book.imageLinks ? book.imageLinks.thumbnail : './coverFallback.png'
    
    return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImg})`
}}></div>
                    <BookshelfChanger currentShelf={this.state.bookStatus} shelves={shelves} updateBookStatus={this.handleBookStatusChange} bookID={book.id}/>
                </div>    
                <div className="book-title">{book.title}</div>
                <ul className="book-authors">
                    {writers.map((author) => (
                        <li key={author}>{author}</li>
                    ))}
                </ul>
            </div>              
    )
  }
}

export default Book;