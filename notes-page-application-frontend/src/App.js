import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addNoteAsync, getNotesAsync, removeNoteAsync, editNoteAsync } from "./reducers/users/thunks";
import EditForm from "./components/EditForm";

function App() {
  const [newNote, setNewNote] = useState({});
  const [currentNote, setCurrentNote] = useState({});
  const allNotes = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const [showNoteFormModal, setShowNoteFormModal] = useState(false);
  const [showEditFormModal, setShowEditFormModal] = useState(false);
  const [editNote, setEditNote] = useState({});
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewNote((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleEditChange = ({ target }) => {
    const { name, value } = target;
    setEditNote((prev) => ({ ...prev, id: currentNote.id, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newNote.title) return;
    dispatch(addNoteAsync(newNote));
    setNewNote({});
    setShowNoteFormModal(false);
  };

  const handleDelete = (noteIdToRemove) => {
    dispatch(removeNoteAsync(noteIdToRemove));
    setCurrentNote({});
  };

  const handleClick = (noteIdToClick) => {
    const clickedNote = allNotes.find(note => note.id === noteIdToClick);
    if (clickedNote) {
      setCurrentNote(clickedNote);
    }
  };

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);

  const toggleModal = () => {
    setShowNoteFormModal(!showNoteFormModal);
  };

  const toggleEditModal = () => {
    setEditNote(currentNote);
    setShowEditFormModal(!showEditFormModal);
  }

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editNoteAsync(editNote));
    setShowEditFormModal(false);
    setCurrentNote(editNote);
  }

  return (
    <main className="main-container">
      <div className="sidebar">
        <div className="notes-heading-container">
          <h2 className="notes-heading">Notes</h2>
          <button className="add-note-button" onClick={toggleModal}>Add Note</button>
        </div>
        <NotesList allNotes={allNotes} handleDelete={handleDelete} handleClick={handleClick} />
      </div>
      {showNoteFormModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>Close</button>
            <NoteForm
              newNote={newNote}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
      {showEditFormModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleEditModal}>Close</button>
            <EditForm
              currentNote = {currentNote}
              editNote={editNote}
              handleEditChange={handleEditChange} 
              handleEditSubmit={handleEditSubmit}
            />
          </div>
        </div>
      )}
      <div className="separator"></div>
      <div className="content">
        {currentNote.title && ( 
          <>
            <div className="content-heading">
                <h2>{currentNote.title}</h2>
                <div className="action-buttons">
                <button className="edit-button" onClick={toggleEditModal}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(currentNote.id)}>Delete</button>
                </div>
              </div>
            <p>{currentNote.content}</p>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
