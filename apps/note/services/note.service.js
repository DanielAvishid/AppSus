// note service

import { localStorageService } from '../../../services/storage.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { noteData } from './note-data.js'

const NOTES_KEY = 'notesDB'
_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyNote,
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
  let notes = localStorageService.loadFromStorage(NOTES_KEY)
  if (!notes || !notes.length) {
    notes = noteData.getNotes()
    localStorageService.saveToStorage(NOTES_KEY, notes)
  }
}

function get(noteId) {
  return storageService.get(NOTES_KEY, noteId).then(note => {
    // note = _setNextPrevCarId(note)
    return note
  })
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
  if (note.id) {
    return storageService.put(NOTES_KEY, note)
  } else {
    return storageService.post(NOTES_KEY, note)
  }
}

function getEmptyNote() {
  return {
    createdAt: Date.now(),
    type: 'NoteTxt',
    isPinned: false,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      title: '',
      txt: '',
      url: '',
    },
  }
}

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
