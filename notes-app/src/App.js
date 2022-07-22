import React from 'react'
import Sidebar from "./component/Sidebar"
import Editor from "./component/Editor"
//import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import './style.css'

function App() {
  const [notes, setNotes] = React.useState(()=> JSON.parse(localStorage.getItem('notes'))||[]);
  const [currNoteId, setCurrNoteId] = React.useState((notes[0] && notes[0].id) || "");


  React.useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
    //console.log();
  },[notes])
   
  function deleteNote(event, noteId) {
        event.stopPropagation()
        console.log("deleted note", noteId)
    setNotes(pre => pre.filter(a=> a.id !== noteId));
        // Your code here
    }

  function createNewNote(){
    const newNote={
      id: nanoid(),
      body : "# type your meme and markdown note's title here"
    }
    setNotes(pre => [newNote, ...pre])
    setCurrNoteId(newNote.id)
  }
  
  function updateNote(text) {
    
    setNotes(old =>{
      const newArr = [];
      for(let i = 0; i < old.length;i++)
      {
        if(old[i].id === currNoteId)
          newArr.unshift({...old[i], body:text})
        else
          newArr.push(old[i])
      }
      return newArr;
    })
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
                deleteNote={deleteNote}
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
