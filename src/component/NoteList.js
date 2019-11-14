import React, {useState} from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 4px 8px;
`;

const Whitespace = styled.div`
  height: 8px;
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

const NoteForm = ({onAdd}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    const note = {
      title,
      content,
    };
    onAdd(note);
  };
  return (
    <ItemContainer>
      <div className="card">
        <div className="card-content">
          <form onSubmit={onsubmit}>
            <input className="input" type="text" placeholder="Title..." value={title} required
                   onChange={e => setTitle(e.target.value)}/>
            <Whitespace/>
            <textarea className="textarea" placeholder="Write your content here..." value={content} required
                      onChange={e => setContent(e.target.value)}/>
            <Whitespace/>
            <button className="button is-primary is-small" type="submit">Post</button>
          </form>
        </div>
      </div>
    </ItemContainer>
  )
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
  const [notes, setNotes] = useState(generateDummyNotes(10));
  return (
    <div>
      <NoteForm/>
      {notes.map(note => <NoteItem key={note.id} note={note}/>)}
    </div>
  );
};

export default NoteList;
