import React from 'react';
import { Switch } from 'react-router-dom'
import LayoutWrapper from './LayoutWrapper'
import Header from './Header'
import HomePage from '../pages/home'
import SignPage from '../pages/signup'

const routes = [
    {
        exact: true,
        pathName: '/',
        Component: HomePage
    },
    {
        pathName: '/signup',
        Component: SignPage
    }
]



const Main = () => (
    <Switch>
        {
            routes.map(page => (
                <LayoutWrapper exact key={page.pathName} path={page.pathName} layout={Header} component={page.Component} />
            ))
        }
    </Switch>
)
// console.log(Main)
export default Main