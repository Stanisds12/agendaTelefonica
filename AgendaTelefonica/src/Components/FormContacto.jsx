import React from 'react'

function FormContacto() { 
    return (
        <React.Fragment>
            <form>
                <div className="form-group">
                    <label htmlFor="txtNombre">Nombre</label>
                    <input type="text" className="form-control txtNombre" id="txtNombre" placeholder="Nombre" name="txtNombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="txtContacto">Contacto</label>
                    <input type="number" className="form-control txtContacto" id="txtContacto" name="txtContacto" placeholder="Contacto" />
                </div>
      
            </form>
        </React.Fragment>

    );
}

export default FormContacto;