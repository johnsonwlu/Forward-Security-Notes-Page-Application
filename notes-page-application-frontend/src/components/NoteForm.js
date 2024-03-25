import React from "react";
import './NoteForm.css'

export default function NoteForm({ newNote, handleChange, handleSubmit }) {
  return (
    <div className="popUp">
      <div className="popup-inner">
        <form onSubmit={handleSubmit}>
          <textarea
            className="title"
            name="title"
            placeholder="New Note"
            value={newNote.title || ""}
            onChange={handleChange}
          />
          <br/>
          <textarea
            className="content"
            name="content"
            placeholder="New Content"
            value={newNote.content || ""}
            onChange={handleChange}
          />
          <br/>
          <button className = "submitButton" type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
}
