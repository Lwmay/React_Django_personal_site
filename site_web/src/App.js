import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/a-propos" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;