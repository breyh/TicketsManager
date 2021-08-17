import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import Codica from '../components/Codica';
import NotFoundPage from '../components/NotFound';
import { Component } from 'react/cjs/react.production.min';
import DetailsTable from '../components/DetailsTable';
import DetailsTableAction from '../components/DetailsTableAction';
import InitialData from '../InitialData';

class AppRouter extends Component {
    state = {
        data: InitialData,
        title: 'Disparadores'
    };
    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Switch>
                    <Route path="/" component={Codica} title={this.state.title} exact={true} />
                    <Route path="/detailsTable/analisys" isActive={true} component={DetailsTable} data={this.state.title} exact={true} />
                    <Route path="/detailsTable/action" isActive={true} component={DetailsTableAction} data={this.state.title} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter >
        );
    }
}

export default AppRouter;