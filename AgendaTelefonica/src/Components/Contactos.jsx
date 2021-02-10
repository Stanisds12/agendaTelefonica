import React, {useState, useEffect} from 'react';
import AddContacto from "./AddContacto";
import Tabela from "./Tabela";
function Contactos() {
    var [contactos, setContactos] = useState([])
    useEffect(() => {
        if (localStorage.getItem("contactos") !== null && localStorage.getItem("contactos") !== JSON.stringify([]) ) {
            let valor = localStorage.getItem("contactos")
            setContactos(JSON.parse(valor))
        } else {
            localStorage.setItem("contactos", JSON.stringify([])) 
        }
    },[]);
  
    return (
        <React.Fragment >
            <AddContacto contactos={contactos} setContactos={ setContactos}/>
            <button type="button" className="btn btn-primary w-100" data-toggle="modal" data-target="#myModal">{contactos.length === 0 ? "Presione aqui para agregar contacto" : "Agregar Contacto" }</button>
            <div className="table-responsive">
             {contactos.length === 0 ? <h1 className="mt-5">No hay Contactos!!!</h1> : <Tabela contactos={contactos} setContactos={setContactos} />}
            </div>
            <br/><p className="text-center">Stanislau Ebo da Silva</p>
        </React.Fragment>
    )
}
export default Contactos 