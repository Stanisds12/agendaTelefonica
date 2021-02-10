import React from 'react'
import FormContacto from "./FormContacto";

function AddContacto({ contactos, setContactos }) { 
    
    const handleButton = () => {
        let nombre = document.getElementById("txtNombre").value;
        let contacto = document.getElementById("txtContacto").value;
        let regex = /^[a-zA-Z ]{3,30}$/;
        if (nombre.trim() !== "" && contacto.trim() !== "") {
            if (regex.test(nombre)) {
                const validar = contactos.some(row => row.contato === contacto)
                if (!validar) {
                    let valor = { id: contactos.length, contato: contacto, nombre: nombre }
                    setContactos(contactos.concat(valor));
                    localStorage.setItem("contactos", JSON.stringify(contactos.concat(valor)))
                    document.getElementById("txtNombre").value = ""
                    document.getElementById("txtContacto").value = ""
                } else {
                    alert("Este numero ya existe en el sistema")
                }
                
            } else alert("El nombre no debe contener digitos")
           
        } else {
            alert("Llena los campos")
        }
           
    }
    return (
        <React.Fragment>
            
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Agregar Contacto</h4>
                        </div>
                        <div className="modal-body">
                            <FormContacto/>
                      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default text-left" data-dismiss="modal">Cerrar</button>
                            <button id="butt" type="button" onClick={() => handleButton()} className="btn btn-primary text-left">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}

export default AddContacto;