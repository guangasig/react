import {useState, React} from "react";

const From = ({notes, setNotes}) => {

    const noteEmpty = {id:null, title:'', body:''}
    const [note, setNote] = useState(noteEmpty)

    const addNotes = (ev) =>{
        ev.preventDefault();

        if(note.title.trim() == "" || note.body.trim() ==""){return}

        const id = notes.length > 0 ? Math.max(...notes.map(note => note.id))+1 : 1;
        // const reg = {id:6, title:'nota6', body:'lorema input'}
        // setNotes(notes.concat(note))
        setNotes([
            ...notes,
            {
                ...note,
                id:id
            }
        ])

        setNote(noteEmpty)
    }

    return (
        <div>
            <form className="box" onSubmit={(ev) => addNotes(ev)}>
                <fieldset>
                    <legend className="title is-5">Crear Notas</legend>
                    <div className="field">
                        <label className="label">Ingresar el título de la nota</label>
                        <div className="control">
                            <input className="input" value={note.title} type="text" onChange={(ev) => setNote({...note,title:ev.target.value})} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Ingrear el cuerpo de la nota</label>
                        <div className="control">
                            <input className="input" value={note.body} type="text" onChange={(ev) => setNote({...note,body:ev.target.value})}/>
                        </div>
                    </div>
                    <button className="button is-primary"> Agregar Notas </button>
                </fieldset>
            </form>
        </div>
    )
}

export default From;