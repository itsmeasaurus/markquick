import { marked } from "marked"

const Note = ({ note, deleteNote }) => {
    return (
        <div className="bg-white p-4 rounded shadow my-2">
            <div className="prose" dangerouslySetInnerHTML={{ __html: marked(note.content)}}></div>
            <button onClick={deleteNote} className="btn btn-error mt-2">Delete</button>
        </div>
    )
}

export default Note