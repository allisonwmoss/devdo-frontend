import React, { useState, useEffect, Fragment } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Navig() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true)
        }
    }, [])
    return (
        <Navbar>
            <NavbarBrand href="/">DevDo</NavbarBrand>
            <Nav className="mr-auto" navbar>
                {isAuth === true ? (
                    <Fragment>
                        {' '}
                        <NavItem>
                            <NavLink href="/ideas">all ideas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ideas/new">submit your idea</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/logout">log out</NavLink>
                        </NavItem>
                    </Fragment>
                ) : (
                    <Fragment>
                        {' '}
                        <NavItem>
                            <NavLink href="/login">log in</NavLink>
                        </NavItem>
                    </Fragment>
                )
                }

            </Nav>
        </Navbar>
    )
}