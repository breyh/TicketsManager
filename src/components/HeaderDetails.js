import React from "react";

const HeaderDetails = () => {
    return (
        <div className="col col-md-12">
            <div className="d-flex description-event spacing-btw ">
                <div className="d-flex align-content-start">
                    <h4 className="tag-open">Abierto</h4>
                    <h4 className="d-flex align-items-center">Descripcion del TF</h4>
                </div>
                <div className="d-flex align-content-end pe-5">
                    <button className="btn-clear-gray mb-3">Descartar</button>
                    <button className="btn-dark-blue mb-3">Editar</button>
                </div>
            </div>
            <div className="mt-5 description-event table-responsive-md p-0" >
                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EFICACIA</th>
                            <th>MOTIVO DEL EVENTO</th>
                            <th>PAIS</th>
                            <th>MAQUINA</th>
                            <th>TIEMPO</th>
                            <th>LUGAR/PLANTA</th>
                            <th>AREA</th>
                            <th>FECHA</th>
                            <th>REPETITIVIDAD</th>
                            <th>ASIGNADO A:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >1</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                            <td>Lorem ipsu</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HeaderDetails;