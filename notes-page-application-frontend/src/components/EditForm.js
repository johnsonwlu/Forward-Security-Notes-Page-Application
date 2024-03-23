export default function EditForm({ currentNote, editNote, handleEditChange, handleEditSubmit }) {
  return (
    <div className="popUp">
      <div className="popup-inner">
        <form onSubmit={handleEditSubmit}>
          <textarea
            className="title"
            name="title"
            placeholder="New Note"
            defaultValue = {currentNote.title}
            value={editNote.title || ""}
            onChange={(e) => handleEditChange(e)} 
          />
          <br/>
          <textarea
            className="content"
            name="content"
            placeholder="New Content"
            defaultValue = {currentNote.content}
            value={editNote.content || ""}
            onChange={(e) => handleEditChange(e)} 
          />
          <br/>
          <button type="submit">Edit Note</button>
        </form>
      </div>
    </div>
  );
}