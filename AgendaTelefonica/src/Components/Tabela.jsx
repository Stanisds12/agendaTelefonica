import React from 'react';

function Tabela({ contactos, setContactos }) {
  
    const deleteContacto = (b) => {
        const x = contactos.filter(cont => cont.id !== b)
        setContactos(x)
        localStorage.setItem("contactos", JSON.stringify(x))
    }
    const habilitarEditar = (b, id, inputNumero, parrafoNumero) => {
        const modale = document.getElementById(b)
        const modale1 = document.getElementById(id)
        const showTextNumber = document.getElementById(inputNumero)
        const hideTextNumber = document.getElementById(parrafoNumero)
        modale.removeAttribute("hidden");
        showTextNumber.removeAttribute("hidden");
        modale1.setAttribute("hidden", true);
        hideTextNumber.setAttribute("hidden", true);
    }

    // Editar los contactos
    const editContacto = (b, idx, inputNumero, parrafoNumero) => {
        const modale = document.getElementById(b)
        const modale1 = document.getElementById(idx)
        const showTextNumber = document.getElementById(inputNumero)
        const hideTextNumber = document.getElementById(parrafoNumero)
        modale1.removeAttribute("hidden");
        modale.setAttribute("hidden", true);
        hideTextNumber.removeAttribute("hidden");
        showTextNumber.setAttribute("hidden", true);
        let regex = /^[a-zA-Z ]{3,30}$/;
        if (regex.test(modale.value) && modale.value !== "" && showTextNumber.value !== "" ) {
            let listaEditada = contactos.map(item => {
                if (item.id === idx) {
                    return { ...item, nombre: modale.value, contato: showTextNumber.value };
                }
                return item;
            });
            contactos = listaEditada; 
            setContactos(contactos)
            localStorage.setItem("contactos", JSON.stringify(contactos))
        }
        
    }
    return (
        <React.Fragment>
         <div>
            <table className="table table-condensed " >
                <thead className="tabla">
                    <tr className="danger">
                        <td>Id</td>
                        <td>Contacto</td>
                        <td>Nombre</td>
                        <td>Acciones</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.map(
                            row =>
                                <tr className="warning" key={row.id}>
                                    <td>{row.id}</td>
                                    <td><p id={row.contato + 2}>{row.contato}</p>
                                        <input type="number" className="form-control nome-input" defaultValue={row.contato} id={row.contato + 1} hidden />
                                    </td>
                                    <td> <p id={row.id}>{row.nombre}</p>
                                        <input type="text" className="form-control nome-input" defaultValue={row.nombre} id={row.contato} hidden />
                                    </td>
                                    <td>
                                        <i onClick={() => deleteContacto(row.id)} className="fa fa-trash"></i>
                                        <i onClick={() => habilitarEditar(row.contato, row.id, (row.contato + 1), (row.contato + 2))} className="fa fa-edit ml-2"></i>
                                        <i onClick={() => editContacto(row.contato, row.id, (row.contato + 1), (row.contato + 2))} className="fa fa-folder-o ml-2"></i>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            </React.Fragment>
    )
    
}
   


export default Tabela;