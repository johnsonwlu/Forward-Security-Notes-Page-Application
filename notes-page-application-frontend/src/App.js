import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

import './App.css';

function App() {
  const [newNote, setNewNote] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewNote((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [content, setContent] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newNote.title) return;
    setAllNotes((prev) => [newNote, ...prev]);
    setNewNote({});
  };

  const handleDelete = (noteIdToRemove) => {
    setAllNotes((prev) => prev.filter(
      (note) => note.id !== noteIdToRemove
    ));
  };
  
  const handleClick = (noteIdToClick) => {
    const clickedNote = allNotes.find(note => note.id === noteIdToClick);
    if (clickedNote) {
      setContent(clickedNote.content);
    }
  };

  return (
    <main>
      <div className="sidebar">
        <h2>Notes</h2>
        <NoteForm
          newNote={newNote}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <NotesList allNotes={allNotes} handleDelete={handleDelete} handleClick={handleClick} />
      </div>
      <div className="content">
        <h2>Content</h2>
        <p>{content}</p>
      </div>
    </main>
  );
}

export default App;
