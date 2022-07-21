import React from 'react'
import Sidebar from "./component/Sidebar"
import Editor from "./component/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import './style.css'

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currNoteId, setCurrNoteId] = React.useState((notes[0] && notes[0].id) || "");

  function createNewNote(){
    const newNote={
      id: nanoid(),
      body : "# type your meme and markdown note's title here"
    }
    setNotes(pre => [newNote, ...pre])
    setCurrNoteId(newNote.id)
  }
  function updateNote(text) {
    setNotes(old => old.map(ele =>{
      return ele.id === currNoteId ? {...ele, body:text}:ele;
    }))
  }
  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currNoteId }) || notes[0]

  }
  return (
    <main>
      {
        notes.length > 0
          ?
            <Split
              sizes={[30,70]}
              direction="horizontal"
              className="split"
            >
              <Sidebar
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrNoteId={setCurrNoteId}
                newNote={createNewNote}
              />
          {
            currNoteId && notes.length && 
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
          }
            </Split>
            :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button 
              className="first-note"
              onClick = {createNewNote}
              > Create one now</button>
          </div>
      }
    </main>

  );
}

export default App;
