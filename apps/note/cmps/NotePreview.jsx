export function NotePreview({ note }) {
  return (
    <article>
      <h2>{note.info.title}</h2>
      <h4>{note.info.txt}</h4>
    </article>
  )
}
