import React, { useState, useEffect} from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import { addNoteAsync, getNotesAsync, removeNoteAsync } from "./reducers/users/thunks";

function App() {
  const [newNote, setNewNote] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewNote((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [content, setContent] = useState("");
  // const [allNotes, setAllNotes] = useState([]);
  const allNotes = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newNote.title) return;
    // setAllNotes((prev) => [newNote, ...prev]);
    dispatch(addNoteAsync(newNote));
    setNewNote({});
  };

  const handleDelete = (noteIdToRemove) => {
    // setAllNotes((prev) => prev.filter(
    //   (note) => note.id !== noteIdToRemove
    // ));
    dispatch(removeNoteAsync(noteIdToRemove));
  };
  
  const handleClick = (noteIdToClick) => {
    const clickedNote = allNotes.find(note => note.id === noteIdToClick);
    if (clickedNote) {
      setContent(clickedNote.content);
    }
  };

  useEffect (() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
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
