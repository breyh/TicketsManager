import React from 'react';
import HeaderDetails from "./HeaderDetails";
import ElementTable from "./ElementTable";
import ActionPlan from './ActionPlan';


const DetailsTableAction = () => {
    return (
        <div className="col col-md-11">
            <h3>Disparadores</h3>
            <HeaderDetails />
            <ElementTable />
            <ActionPlan />
        </div>)
}

export default DetailsTableAction;
