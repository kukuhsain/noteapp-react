import React from "react";

export const NotesContext = React.createContext({
  notes: [],
  addNote: (title, content) => {
  },
});
