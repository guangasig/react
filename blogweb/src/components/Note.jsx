import React, { useState } from "react";

const Note = ({note,deleteNote,updateNote}) =>{

    const [modeEdit,setModeEdit] = useState(false)
    const [item, setItem] = useState(note)

    const toggle = () => {
        setModeEdit(!modeEdit)
        setItem(note)
    }

    const edit = () => {
        setModeEdit(false)
        updateNote(item)
    }

    return  (
        <li className="columns is-gapless is-variable is-2-tablet">
            <div className="column">Id:{note.id}</div>
            {
                modeEdit ? 
                <label className="column">
                    Título
                    <input type="text" className="input is-small" value={item.title} onChange={(ev) => setItem({...item,title:ev.target.value})}/>
                </label>
                :<div className="column">Título: {note.title}</div>
            }
            {
                modeEdit ? 
                <label className="column">
                    Cuerpo
                    <input type="text" className="input is-small" value={item.content} onChange={(ev) => setItem({...item,content:ev.target.value})}/>
                </label>
                :<div className="column">Cuerpo: {note.content}</div>
            }
            <div className="column">
                <button className="button is-primary is-small" onClick={()=>toggle()}>{modeEdit ? 'Cancelar' : 'Edit'}</button>
                {
                    modeEdit && <button className="button is-primary is-small" onClick={edit}>Guardar</button>
                }
                {
                    !modeEdit &&
                    <button className="button is-danger is-light is-small" onClick={()=> deleteNote(note.id)}>X</button>
                }
            </div>
        </li>
    )
}

export default Note;