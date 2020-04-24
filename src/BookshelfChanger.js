import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propTypes = {
    currentShelf: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookStatus: PropTypes.func.isRequired,
    bookID: PropTypes.string.isRequired
  }

  render() {

    const { currentShelf, shelves, updateBookStatus, bookID } = this.props
    
    return(
        <div className="book-shelf-changer">
          <select value={currentShelf} onChange={(event) => updateBookStatus(bookID, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            {shelves.map((shelf) => (
                <option key={shelf.shelfID} value={shelf.shelfID}>{shelf.label}</option>))}
            <option value="None">None</option>
          </select>
        </div>
    )
  }
}

export default BookshelfChanger;