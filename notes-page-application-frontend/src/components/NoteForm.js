import React from "react";

export default function NoteForm({ newNote, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Note"
        value={newNote.title || ""}
        onChange={handleChange}
      />
      <br/>
      <input
        name="content"
        placeholder="New Content"
        value={newNote.content || ""}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Add Note</button>

     
    </form>
  );
}