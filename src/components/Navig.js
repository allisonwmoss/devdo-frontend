import React, { useState, useEffect, Fragment } from 'react'
import { FRONTURL } from '../config';
import ModalExample from './Modal';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
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
            {isAuth === true ? (
                <Fragment>
                    {' '}
                    <NavbarBrand href="/ideas">DevDo</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/ideas">all ideas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ideas/new">submit your idea</NavLink>
                        </NavItem>
                        <ModalExample buttonLabel="test" />
                        <NavItem>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/logout">log out</NavLink>
                        </NavItem>
                    </Nav>
                </Fragment>
            ) : (
                <Fragment>
                    {' '}
                    <Navbar>
                        <NavbarBrand>
                            DevDo
                        </NavbarBrand>
                    </Navbar>
                </Fragment>
            )
            }
        </Navbar>
    )
}