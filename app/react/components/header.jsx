import React, { PropTypes } from 'react'
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap'

export default class Header extends React.Component {
  render() {

    var rightNav =
      <Nav navbar right>
        <a href='/'> home </a>
        <a href='/users/edit'> edit </a>
      </Nav>

    var leftNav =
      <Nav navbar>
      </Nav>

    return (
      <Navbar fixedTop brand='News App' toggleNavKey={0}>
        <CollapsibleNav>
          {rightNav}
        </CollapsibleNav>
      </Navbar>
    )
  }
}
