import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Navig() {
    return (
        <Navbar>
            <NavbarBrand href="/">DevDo</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/ideas">all ideas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/ideas/new">submit your idea</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/logout">log out</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}