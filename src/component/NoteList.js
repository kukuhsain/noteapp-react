import React, {useContext} from "react";
import styled from "styled-components";
import {NotesContext} from "../context";

const ItemContainer = styled.div`
  padding: 4px 8px;
`;

const NoteItem = ({note}) => (
  <ItemContainer>
    <div className="card">
      <div className="card-content">
        <h1 className="title is-5">{note.title}</h1>
        <h2 className="subtitle is-6">{note.content}</h2>
      </div>
    </div>
  </ItemContainer>
);

const NoteList = () => {
  const notesContext = useContext(NotesContext);
  const notes = notesContext.notes;
  return (
    <div>
      {notes.map(note => <NoteItem key={note.id} note={note}/>)}
    </div>
  );
};

export default NoteList;
