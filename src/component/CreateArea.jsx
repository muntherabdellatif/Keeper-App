import React from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(para) {
    const [note,setNote]=React.useState({title:"",content:""});

    function writeNote(event){
        const { name, value } = event.target;
        setNote((last)=> {
            return {
                ...last ,
                [name]:value
            }
        })
    }
    function submitNote(event){
        para.onAdd(note);
        setNote({title:"",content:""});
        event.preventDefault()
    }
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={writeNote} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={writeNote} value={note.content}/>
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;