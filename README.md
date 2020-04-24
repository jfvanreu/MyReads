# MyReads Project

This is my first ReactJS project in the context of Udacity's React JS nano-degree program. This is an application which allows users to track their favorite books and classify them in different categories (reading, want to read and read). This project used [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project so I could leverage the "look and feel" (CSS) of the app.

## TL;DR

To launch the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Folder structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── Book.js # This is the Book component.
    ├── BookSearch.js # This is the Search page to add new books to your collection.
    ├── Bookshelf.js # This is the Bookshelf component of the app.
    ├── BookshelfChanger.js # This is the Selector which allows users to change the status of their books.
    ├── App.test.js # Could have been used for testing
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are at the bottom of this document.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Design
This project is composed of 5 key components:

* The main app (home) page which displays bookshelves
* A bookshelf component which displays books that I marked with a certain status
* A book component which displays info on each book (cover, author, title, etc...)
* A bookshelf switcher component which allows users to switch the status of each book. There are 4 status: currently reading, want to read, read and none.
* A SearchBook component which allows users to search books based on author and title. This component leverages the book component.

## Further work
Overall, the project achieves the requirements established by Udacity. 
However, a few areas can be improved:

* The main page reloads all books once a single book is updated. Initially, I managed to update a single book rapidly but new books found in the Search page needed a refresh in the main page in order to show up. This can be improved.
* Some books don't have a cover. It currently shows a blank cover. However, I couldn't point it to show a default cover.
* The search feature works well except that it lists "Artificial Intelligence" books when I type "Art". In theory, it should be an exact match. This may be something wrong with the Search API.


## Backend Server

To simplify the development process, Udacity provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
