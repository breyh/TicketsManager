import React from 'react';
import { Link } from 'react-router-dom';

const ElementTable = () => {

    return (
        <div className="col-md-12">
            <div className="element-table">
                <Link
                    to="/detailsTable/analisys"
                    id="tab1"
                    className="isActive ms-3" >Analisis
                </Link>
                <Link
                    to="/detailsTable/action"
                    id="tab2"
                    className="isActive ms-3" >Plan de Acion
                </Link>
            </div>
        </div >
    )

};

export default ElementTable;