import {marked} from "marked"
const { useState } = require("react")

marked.setOptions({
    gfm: true,
    breaks: true, 
    tables: true, 
  });

const NoteForm = ({ addNote }) => {
    const [text, setText] = useState('')
    const [showCopyScucess, setShowCopySuccess] = useState(false)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text.trim()) {
            addNote({ content: text, id: Date.now() })
            setText('')
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setShowCopySuccess(true)
                setTimeout(() => {
                    setShowCopySuccess(false)
                }, 2000)
            })
            .catch(err => {
                console.error('Failed to copy the text')
            })
    }

    return (
        <div className="p-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-2"
                >
                <textarea
                    value={text}
                    onChange={handleChange}
                    rows="10"
                    cols="50"
                    placeholder="Write your markdown note here..."
                    className="p-4 bg-slate-300 textarea textarea-bordered w-full"
                ></textarea>
                {/* <button
                    type="submit"
                    className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Add Note</button> */}
                <button type="button" onClick={handleCopy} className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Markdown</button>
                {showCopyScucess && (
                    <div className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Text copied successfully!
                    </div>
                )}
            </form>
            <div className="mt-4">
                <h3 className="text-lg font-bold">Preview</h3>
                <div className="prose p-2 border rounded shadow bg-black text-white markdown-body" dangerouslySetInnerHTML={{ __html: marked(text)}}></div>
            </div>
        </div>
    )
}

export default NoteForm