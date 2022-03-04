import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AZGEtl from './pages/AZGImmo/ETL'
import KNIME_egalite from './pages/Knime_egalite/Knime_egalite';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/a-propos" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/azg_etl" exact component={AZGEtl} />
                <Route path="/knime_egalite" exact component={KNIME_egalite} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;