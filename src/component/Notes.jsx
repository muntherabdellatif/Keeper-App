import React from "react";

function Notes (para) {
    return (
        <div className="note">
            <h1> {para.title} </h1>
            <p> {para.content}</p>
        </div>
    );
}

function CreatNotes (note) {
    return ( 
        <Notes
        key={note.key}
        title={note.title}
        content={note.content}
        />
    );
}

export {Notes,CreatNotes}  ;