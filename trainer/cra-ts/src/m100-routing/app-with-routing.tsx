import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Demos from './demos'
import Labs from './labs'
import NotFound from './not-found'

export default function AppWithRouting() {
    return (
        <BrowserRouter>
            <h2>AppWithRouting works</h2>
            <ul>
                <li><Link to="/demos">DEMOS</Link></li>
                <li><Link to="/labs">LABS</Link></li>
            </ul>
            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/demos" component={Demos}></Route>
                <Route exact path="/labs" component={Labs}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}