import React, {useContext, useState} from "react";
import styled from "styled-components";
import {NotesContext} from "../context";

const ItemContainer = styled.div`
  padding: 4px 8px;
`;

const Whitespace = styled.div`
  height: 8px;
`;

const NoteForm = () => {
  const notesContext = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = async e => {
    e.preventDefault();
    await notesContext.addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <ItemContainer>
      <div className="card">
        <div className="card-content">
          <form onSubmit={onSubmit}>
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

export default NoteForm;
