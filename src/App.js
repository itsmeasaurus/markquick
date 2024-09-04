import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    setNotes(savedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  const deleteNote = (index) => {
    const newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
  }

  return (
    <div className='App'>
      <NoteForm addNote={addNote}/>
      {/* <NoteList notes={notes} deleteNote={deleteNote}/> */}
    </div>
  )

}

export default App;
