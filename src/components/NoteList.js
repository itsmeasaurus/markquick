import Note from "./Note"

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="p-4">
            {notes.map((note, index) => (
                <Note key={note.id} note={note} deleteNote={() => deleteNote(index)}/>
            ))}
        </div>
    )
}

export default NoteList