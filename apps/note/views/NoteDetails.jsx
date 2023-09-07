import { noteService } from '../services/note.service.js'
import { NoteEdit } from '../cmps/NoteEdit.jsx'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { useOutletContext } = ReactRouterDOM
const { Link } = ReactRouterDOM

export function NoteDetails() {
  const [note, setNote] = useState(null)
  const { noteId } = useParams()
  const { updateNote } = useOutletContext()
  const navigate = useNavigate()

  function onExitModal() {
    navigate('/note')
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

  if (!note) return <div className="loading">Loading...</div>
  return (
    <div className="note-details-overlay" onClick={() => onExitModal()}>
      <div className="note-details" onClick={e => e.stopPropagation()}>
        <div>
          {note.info.url && <img src={note.info.url} alt="user-pic" />}
          <input type="text" value={note.info.title} placeholder="Title" />
          <input type="text" value={note.info.txt} placeholder="Take a note..." />
        </div>
        <div>{note.createdAt}</div>
        <div>
          <button>
            <span className="material-symbols-outlined">delete</span>
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

        {/* <NoteEdit note={note} /> */}
        <button onClick={() => onExitModal()}>X</button>
      </div>
    </div>
  )
}
