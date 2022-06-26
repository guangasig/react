import {React, useState} from 'react'
import From from './components/Form'
import Notes from './components/Notes';

export default function Dashboard(){

    const [notes, setNotes] = useState([
        {id:1, title:'nota1', body:'lorema input'},
        {id:2, title:'nota2', body:'lorema input'},
        {id:3, title:'nota3', body:'lorema input'},
        {id:4, title:'nota4', body:'lorema input'},
        {id:5, title:'nota5', body:'lorema input'},
    ]);

    return (
        <div className='container'>
            {/* <pre>{ JSON.stringify(notes) }</pre> */}
            <From notes={notes} setNotes={setNotes}></From>
            <Notes notes={notes} setNotes={setNotes}></Notes>
        </div>
    )
}
