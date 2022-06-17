import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function writeNote(e) {
    var { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={writeNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={writeNote}
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onAdd(note);
            e.preventDefault();
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
