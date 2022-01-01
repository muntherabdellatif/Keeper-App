import React from "react";
import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import {CreatNotes} from "./Notes.jsx";


function App () {
    return (
        <div>
            <Header/>
            {notes.map(CreatNotes)}
            <Footer/>
        </div>
    );
}

export default App ;