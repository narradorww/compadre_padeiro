import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
    )
    }

export default AppRoutes
