import React from "react";
import "bulma";
import styled from "styled-components";
import NoteList from "./component/NoteList";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
`;

const App = () => {
  return (
    <Container>
      <h1 className="title">NoteApp</h1>
      <NoteList/>
    </Container>
  );
};

export default App;
