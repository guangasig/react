import React from "react";
import Note from './Note';

const Notes = ({notes, setNotes}) => {

    const deleteNote = (id) =>{
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
    }

    const updateNote = (newNote) =>{
        setNotes(
            notes.map(note=> note.id == newNote.id ? newNote : note)
        )
    }

    return (
        <article className="card">
            <header className="card-header">
                <p className="card-header-title">Listado de notas</p>
            </header>
            <div className="content">
                <ol className="column">
                    {
                        notes.map( note =>{
                            return  <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote}></Note>
                        })
                    }
                </ol>
            </div>
        </article>
    )
}

export default Notes;