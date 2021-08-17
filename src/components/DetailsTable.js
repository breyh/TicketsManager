import React from 'react';
import HeaderDetails from "./HeaderDetails";
import ElementTable from "./ElementTable";
import Analisys from './Analisys';


const DetailsTable = () => {
    return (
        <div className="col col-md-11">
            <h3>Disparadores</h3>
            <HeaderDetails />
            <ElementTable />
            <Analisys />
        </div>
    )
};



export default DetailsTable;