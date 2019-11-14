import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 4px 8px;
`;

const generateDummyNotes = amount => {
  const notes = [];
  for (let i = 1; i <= amount; i++) {
    notes.push({
      id: i,
      title: "Title " + i,
      content: "Content " + i,
    });
  }
  return notes;
};

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
  const notes = generateDummyNotes(10);
  return (
    <div>
      {notes.map(note => <NoteItem key={note.id} note={note}/>)}
    </div>
  );
};

export default NoteList;
