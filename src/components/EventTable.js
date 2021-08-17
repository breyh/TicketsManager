import React, { Component } from "react";
import Event from "./Event";
import InitialData from '../InitialData';
import { Link } from "react-router-dom";

class EventTable extends Component {
    state = {
        data: InitialData
    }

    handleRemoveData = () => {
        this.setState(() => ({ data: [''] }));
    };
    handleSelectRow = () => {
        const dataSelected = this.state.data.values();
        console.log("el valor es " + dataSelected);
    }
    render() {
        return (
            <div>
                <div className="table-responsive-md col-md-11 mt-5 table-modified">
                    <div className="d-flex justify-content-end pe-5">
                        <button
                            className="btn-clear"
                            onClick={this.handleRemoveData}
                        >LIMPIAR DATOS</button>
                    </div>
                    <Link dataSelected={this.dataSelected} to="/detailstable/analisys" >
                        <table className="table table-hover pe-5">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>MOTIVO DEL EVENTO</th>
                                    <th>PAIS</th>
                                    <th>MAQUINA</th>
                                    <th>DESCRIPCION</th>
                                    <th>LUGAR / PLANTA</th>
                                    <th>AREA</th>
                                    <th>FECHA</th>
                                    <th>ESTATUS</th>
                                    <th>ASIGNADO A: </th>
                                    <th><i className="fas fa-ellipsis-v"></i></th>
                                </tr>
                            </thead>
                            <Event eventData={this.state.data} />
                        </table>
                    </Link>
                </div>

            </div >
        )
    }
}
export default EventTable;