import { NoteList } from '../cmps/NoteList.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  //   const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
  console.log(notes)

  useEffect(() => {
    noteService.query().then(notes => {
      setNotes(notes)
      console.log(notes)
    })
  }, [])

  // TODO : see why notes.map isnt working well in NoteAdd (the note added to the DB!)
  function onAddNote(noteToAdd) {
    console.log('note to add', noteToAdd)
    noteService
      .save(noteToAdd)
      .then(updatedNotes => {
        setNotes(updatedNotes)
        // showSuccessMsg('Review saved successfully')
      })
      .catch(err => {
        console.log('err:', err)
        // showErrorMsg('Error saving review')
      })
  }

  function updateNote(note) {
    noteService.save(note)
    noteService.query().then(notes => {
      setNotes(notes)
      console.log(notes)
    })
  }

  function onRemoveNote(note) {
    const noteId = note.id
    noteService
      .remove(noteId)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
        // showSuccessMsg(`Book Removed! ${noteId}`)
      })
      .catch(err => {
        console.error(err)
        // showErrorMsg(`Problem Removing ${noteId}`)
      })
  }

  if (!notes.length) return <div>Loading...</div>

  return (
    <section>
      <NoteAdd onAddNote={onAddNote} />
      <NoteList notes={notes} updateNote={updateNote} onRemoveNote={onRemoveNote} />
    </section>
  )
}
