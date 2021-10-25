import React, { useState, useEffect, Fragment } from 'react'
import { FRONTURL } from '../config';
import ModalPop from './Modal';
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
                    <NavbarBrand href="/ideas" id="site-header">DevDo</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/ideas" className="boldwhite">all ideas</NavLink>
                        </NavItem>
                        <ModalPop buttonLabel="submit your idea" action="create" />
                        <NavItem>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/logout" className="boldwhite">log out</NavLink>
                        </NavItem>
                    </Nav>
                </Fragment>
            ) : (
                <Fragment>
                    {' '}
                    <Navbar>
                        <NavbarBrand id="site-header">
                            DevDo
                        </NavbarBrand>
                    </Navbar>
                </Fragment>
            )
            }
        </Navbar>
    )
}