import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import AZGEtl from './pages/AZGImmo/ETL'
import KNIME_egalite from './pages/Knime_egalite/Knime_egalite';
import AZGBank from './pages/AZGBank/AZG_bank'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/a-propos" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/mentions" exact component={Mentions} />
                <Route path="/azg_etl" exact component={AZGEtl} />
                <Route path="/knime_egalite" exact component={KNIME_egalite} />
                <Route path="/azg_bank" exact component={AZGBank} />
                <Route path="*" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;