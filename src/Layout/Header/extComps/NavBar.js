import React, { Component } from 'react'
import { Link, NavLink as NavRoutes } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap'
import Logo from '../../../assets/logo.png'
import TopUpperJumboTron from './Jumbotron'
import './index.css'

const styles = {
    signUpBtn: {
        borderRadius: 20,
        cursor: 'pointer',
        width: 100,
        marginLeft: 12
    },

}
export default class TopUpperBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            links: [
                { path: '/', title: 'Home' },
                { path: '#', title: 'Features' },
                { path: '#', title: 'Testimonials' },
                { path: '#', title: 'Screenshots' },
                { path: '#', title: 'Pricing' }

            ]
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    loopNavItems() {
        const { links } = this.state

        return links.map(page => (
            <NavItem className="mr-md-4 active" key={page.title} >
                <NavRoutes
                    exact
                    to={page.path}
                    activeStyle={{ fontWeight: 'bold', textDecoration: 'none' }}
                    style={{ color: 'white', textDecoration: 'none', margin: 13 }}
                >

                    {
                        page.title.toUpperCase()
                    }
                </NavRoutes>
            </NavItem>
        ))
    }
    render() {
        const { collapsed } = this.state
        return (
            <TopUpperJumboTron {...this.props}>
                <Navbar style={styles.navbar} dark expand="md" >
                    <NavbarBrand
                        tag={Link}
                        to='/'
                        className="mr-auto"
                    >
                        <img src={Logo} alt="logo" />
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

                    <Collapse isOpen={!collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                this.loopNavItems()

                            }
                            <Button
                                tag={Link}
                                to='/signup'
                                outline
                                style={styles.signUpBtn}>SIGN UP
                            </Button>

                        </Nav>
                    </Collapse>
                </Navbar>

            </TopUpperJumboTron>
        )
    }

}