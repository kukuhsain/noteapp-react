import React, {useEffect, useState} from 'react';

import {NotesContext} from "./index";

const BASE_URL = "http://localhost:5000";

const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + "/notes");
        const {data} = await response.json();
        setNotes(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  return (
    <NotesContext.Provider value={{
      notes,
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
