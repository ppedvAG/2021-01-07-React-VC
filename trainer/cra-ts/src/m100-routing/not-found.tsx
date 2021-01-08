import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import AppWithRouting from './app-with-routing'

export default function NotFound() {
    return (
        <div>
            <h2>
                Die gesuchte Seite existiert nicht
            </h2>
            <Link to="/">HOME</Link>
            {/* <Route path="/" component={AppWithRouting}/> */}
        </div>
    )
}