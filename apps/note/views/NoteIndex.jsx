import { NoteList } from '../cmps/NoteList.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function NoteIndex() {
  const [notes, setNotes] = useState(null)
  //   const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

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

  function onRemoveNote(noteId) {
    noteService
      .remove(noteId)
      .then(() => {
        setNotes(prevNote => prevNote.filter(note => note.id !== noteId))
        // showSuccessMsg(`Book Removed! ${noteId}`)
      })
      .catch(err => {
        console.error(err)
        // showErrorMsg(`Problem Removing ${noteId}`)
      })
  }

  if (!notes) return <div>Loading...</div>

  return (
    <section>
      <NoteAdd onAddNote={onAddNote} />
      <div>note app</div>
      <NoteList notes={notes} onRemoveNote={onRemoveNote} />
    </section>
  )
}
