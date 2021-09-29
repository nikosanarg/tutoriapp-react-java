import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../views/Home';
export default function Routes(params) {
    return (
        <Router>
            <Route path="/" exact>
                <Home /> // exact = no tiene subdirectorios
            </Route>
            <Route path="/faq">
                <Faq />
            </Route>
            <Route> // no tiene path asignado, error 404 cae aca
                <NotFound404 />
            </Route>
        </Router>
    )
}