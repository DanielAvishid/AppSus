import { NotePallete } from '../cmps/NotePallete.jsx'

const { useNavigate } = ReactRouterDOM
const { useState, useRef } = React

export function NotePreview({ key, note, onAddNote, onRemoveNote }) {
    const [isPalleteOpen, setIsPalleteOpen] = useState(false)
    const [noteBgc, setNoteBgc] = useState(note.style.backgroundColor)
    const [noteUrl, setNoteUrl] = useState(note.info.url)

    const fileInputRef = useRef(null)

    const navigate = useNavigate()

    function onTogglePin(note) {
        note.isPinned = !note.isPinned
        onAddNote(note)
    }

    function onTogglePallete() {
        setIsPalleteOpen(!isPalleteOpen)
    }

    function onNoteClick(noteId) {
        console.log('click on note', noteId)
        navigate(`/note/${noteId}`)
    }

    function onChangeNoteBgc(color, note) {
        console.log(note.style.backgroundColor)
        note.style.backgroundColor = color
        console.log(note.style.backgroundColor)
        setNoteBgc(color)
        onAddNote(note)
    }

    function onDuplicateNote(note) {
        const copyNote = note
        copyNote.id = ''
        onAddNote(copyNote)
    }

    function handleFileInputChange(event) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = e => {
                const imageUrl = e.target.result
                setNoteUrl(imageUrl) // Display the selected image
                const updatedNote = { ...note, info: { ...note.info, url: imageUrl } }
                onAddNote(updatedNote) // Update the note with the image URL
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <article key={key} className="note-preview-container">
            <div className={`note-preview flex column justify-center ${noteBgc}`}>
                <div className="note-preview-info" onClick={() => onNoteClick(note.id)}>
                    {noteUrl && <img src={noteUrl} alt="user-pic" />}
                    {note.info.title && <h4 className="note-title">{note.info.title}</h4>}
                    {note.info.txt && <p className="note-txt">{note.info.txt}</p>}
                </div>

                <section
                    className={`note-preview-btns flex space-between ${!note.info.title && !note.info.txt && noteUrl ? 'img-btns' : ''
                        }`}
                >
                    <button onClick={() => onRemoveNote(note)}>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                    <button onClick={() => onTogglePin(note)}>
                        <span className="material-symbols-outlined">star</span>
                    </button>
                    <button onClick={() => onTogglePallete()}>
                        <span className="material-symbols-outlined">palette</span>
                    </button>
                    <button onClick={() => onDuplicateNote(note)}>
                        <span className="material-symbols-outlined">file_copy</span>
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                        ref={fileInputRef}
                    />
                    <button onClick={() => fileInputRef.current.click()}>
                        <span className="material-symbols-outlined">image</span>
                    </button>
                    <button>
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </section>
                <img src="assets/img/checked-icon.png" className="check-btn" />
                {isPalleteOpen && <NotePallete note={note} onChangeNoteBgc={onChangeNoteBgc} />}
            </div>
        </article>
    )
}
