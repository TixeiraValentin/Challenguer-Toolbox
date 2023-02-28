import React from 'react'
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css"
export default function NavigationBar() {
  
  
    return (
    <>
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand as={Link} to="/">React Test App</Navbar.Brand>
    </Navbar>
    </>
  )
}
