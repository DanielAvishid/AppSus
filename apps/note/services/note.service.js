// note service

import { storageService } from '../../../services/storage.service.js'
// import { storageService } from '../../../services/storage.service.js'
import { noteData } from './note-data.js'

const NOTES_KEY = 'notesDB'
_createNotes()
console.log('jii')

export const noteService = {
  query,
  //   get,
  //   remove,
  //   save,
  //   getEmptyBook,
  //   getEmptyReview,
  //   getNextBookId,
  //   getFilterBy,
  //   setFilterBy,
  //   getDefaultFilter,
  //   addReview,
  //   deleteReview,
}

function query(filterBy = {}) {
  return storageService.query(NOTES_KEY).then(notes => {
    // if (filterBy.title) {
    //   const regex = new RegExp(filterBy.title, 'i')
    //   notes = notes.filter(note => regex.test(note.title))
    // }
    // if (filterBy.price) {
    //   notes = notes.filter(note => note.listPrice.amount >= filterBy.price)
    // }
    // if (filterBy.publishedDate) {
    //   notes = notes.filter(note => note.publishedDate >= filterBy.publishedDate)
    // }
    return notes
  })
}

function _createNotes() {
  let notes = storageService.loadFromStorage(NOTES_KEY)
  console.log(notes)
  if (!notes || !notes.length) {
    notes = noteData.getNotes()
    storageService.saveToStorage(NOTES_KEY, notes)
  }
}

// function get(bookId) {
//   return storageService.get(BOOKS_KEY, bookId).then(book => {
//     book = _setNextPrevCarId(book)
//     return book
//   })
// }

// function remove(bookId) {
//   return storageService.remove(BOOKS_KEY, bookId)
// }

// function save(book) {
//   if (book.id) {
//     return storageService.put(BOOKS_KEY, book)
//   } else {
//     return storageService.post(BOOKS_KEY, book)
//   }
// }

// function addReview(bookId, review) {
//   review = { ...review }
//   review.id = utilService.makeId()
//   return get(bookId)
//     .then(book => {
//       if (book.reviews) book.reviews.push(review)
//       else book.reviews = [review]
//       return book
//     })
//     .then(book => storageService.put(BOOKS_KEY, book))
// }

// function addGoogleBook(book) {
//   return query()
//     .then(books => {
//       const idToCheck = book.id
//       const exists = books.some(currBook => currBook.id === idToCheck)
//       return exists ? console.log('Book exists 😢') : save(book)
//     })
//     .catch(err => console.log('Error adding google book:', err))
// }

// function deleteReview(bookId, reviewId) {
//   return get(bookId).then(book => {
//     book.reviews = book.reviews.filter(review => review.id !== reviewId)
//     return storageService.put(BOOKS_KEY, book)
//   })
// }

// function getEmptyReview() {
//   return {
//     fullname: '',
//     rating: '',
//     readAt: '',
//   }
// }

// function getEmptyBook() {
//   return {
//     title: '',
//     subtitle: '',
//     authors: [],
//     publishedDate: 1900,
//     description: '',
//     pageCount: 0,
//     categories: [],
//     thumbnail: '../assets/imgs/20.jpg',
//     language: 'en',
//     listPrice: {
//       amount: 0,
//       currencyCode: 'EUR',
//       isOnSale: false,
//     },
//   }
// }

// function getFilterBy() {
//   return { ...gFilterBy }
// }

// function setFilterBy(filterBy = {}) {
//   if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
//   if (filterBy.price !== undefined) gFilterBy.price = filterBy.price
//   if (filterBy.publishedDate !== undefined) gFilterBy.publishedDate = filterBy.publishedDate
//   return gFilterBy
// }

// function getNextBookId(bookId) {
//   return storageService.query(BOOKS_KEY).then(books => {
//     var idx = books.findIndex(book => book.id === bookId)
//     if (idx === books.length - 1) idx = -1
//     return books[idx + 1].id
//   })
// }

// function getDefaultFilter() {
//   return { title: '', price: '', publishedDate: '' }
// }

// function _setNextPrevCarId(book) {
//   return storageService.query(BOOKS_KEY).then(books => {
//     const bookIdx = books.findIndex(cuurBook => cuurBook.id === book.id)
//     const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
//     const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
//     book.nextBookId = nextBook.id
//     book.prevBookId = prevBook.id
//     return book
//   })
// }
