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
        </li>
      ))}
    </ul>
  );
}
