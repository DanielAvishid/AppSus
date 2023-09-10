import { noteService } from '../services/note.service.js'
import { NoteEdit } from '../cmps/NoteEdit.jsx'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { useOutletContext } = ReactRouterDOM
const { Link } = ReactRouterDOM

export function NoteDetails() {
  const [note, setNote] = useState(null)
  const { noteId } = useParams()
  const { onAddNote } = useOutletContext()
  const navigate = useNavigate()

  function onExitModal() {
    navigate('/note/list')
  }

  useEffect(() => {
    noteService
      .get(noteId)
      .then(setNote)
      .catch(err => {
        console.log('err:', err)
        // maybe need to navigate to /note/list
        navigate('/note')
      })
  }, [noteId])

  function handleSubmit(ev) {
    console.log(ev)
    ev.preventDefault()
    // onAddNote(noteInfo)
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }
    setNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))
  }

  if (!note) return <div className="loading">Loading...</div>
  return (
    <div className="note-details-overlay" onClick={() => onExitModal()}>
      <div className="note-details flex column" onClick={e => e.stopPropagation()}>
        {note.info.url && <img src={note.info.url} alt="user-pic" />}
        <form
          id="note-details-form"
          className="note-details-form flex column"
          onSubmit={handleSubmit}
        >
          <input type="text" value={note.info.title} placeholder="Title" onChange={handleChange} />
          <input
            type="text"
            value={note.info.txt}
            placeholder="Take a note..."
            onChange={handleChange}
          />
        </form>
        <div className="create-at">{note.createdAt}</div>
        <div className="flex space-between align-center">
          <div className="note-details-btns">
            <button>
              <span className="material-symbols-outlined">file_copy</span>
            </button>
            <button>
              <span className="material-symbols-outlined">star</span>
            </button>
            <button>
              <span className="material-symbols-outlined">palette</span>
            </button>
            <button>
              <span className="material-symbols-outlined">new_label</span>
            </button>
            <button>
              <span className="material-symbols-outlined">image</span>
            </button>
            <button>
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div>
            {/* TODO: the submission should be execute just whenclick enter or clicking ouside of the form div  */}
            <button className="close-btn" type="submit" form="note-details-form">
              Close
            </button>
          </div>
        </div>

        {/* <NoteEdit note={note} /> */}
        <button onClick={() => onExitModal()}>X</button>
      </div>
    </div>
  )
}
