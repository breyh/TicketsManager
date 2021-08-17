import React from 'react';
import Search from './Search';
import EventTable from './EventTable';
import { Component } from 'react';

class Codica extends Component {
    render() {
        return (
            <div className="App col-md-11" >
                <div>
                    <h3>Disparadores</h3>
                </div>
                <Search />
                <EventTable />
            </div>
        );
    }

};

export default Codica;
