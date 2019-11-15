import React, {useEffect, useState} from 'react';

import {NotesContext} from "./index";

const BASE_URL = process.env.NODE_ENV === "development" ?
  "http://localhost:5000" : "https://noteapp-express.herokuapp.com/";

const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = BASE_URL + "/notes";
        const response = await fetch(url);
        const {data} = await response.json();
        setNotes(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  const addNote = async (title, content) => {
    try {
      const url = BASE_URL + "/notes";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, content}),
      };
      const response = await fetch(url, options);
      const {data} = await response.json();
      console.log(data);
      setNotes([...notes, data]);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <NotesContext.Provider value={{
      notes,
      addNote,
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
