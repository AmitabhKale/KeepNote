import React from "react";
import NoteForm from "../components/NoteForm";

function NewNote() {
  return (
    <div>
      <h2 className="text-warning">Create Note</h2>
      <NoteForm />
    </div>
  );
}

export default NewNote;
