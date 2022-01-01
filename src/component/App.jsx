import React from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";


function App () {
    const [noteList,setNoteList] =React.useState([]);

    function addNote(newNote){
        setNoteList ((lastNote)=>{
            return [...lastNote , newNote] ;
        })

    }

    function deleteNote (NoteIndex) {
        setNoteList((lastNote)=> {
            return lastNote.filter((note,index)=>{
                return index !== NoteIndex
            })
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea
                onAdd={addNote}
            />
            {noteList.map((note,index)=>{
                return <Note 
                    delete={deleteNote}
                    id={index} 
                    key={index} 
                    title={note.title} 
                    content={note.content}  />
            })}
            <Footer/>
        </div>
    );
}

export default App ;