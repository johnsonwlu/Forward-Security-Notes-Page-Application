// NotesList.js
import React from "react";
import './NotesList.css';

export default function NotesList({ allNotes, handleDelete, handleClick }) {
  return (
    <ul className="notes-list">
      {allNotes.map(({ title, id }) => (
        <li key={id} className="note-item">
          <div className="note-title" onClick={() => handleClick(id)}>
            {title}
          </div>
          <button className="delete-button" onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}>delete</button>
        </li>
      ))}
    </ul>
  );
}
