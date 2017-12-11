import React, { Component } from 'react'

import { MenuWrapper, MenuItem, MenuItemLink } from './styled/Menu'

export class Menu extends Component {
  state = {
    menuItem: [
      'The Queen City',
      'My Reservations',
      'Guide'
    ]
  }

  renderItem(item, key) {
    return (
      <MenuItem key={key}>
        <MenuItemLink href="#">
          {item}
        </MenuItemLink>
      </MenuItem>
    )
  }

  render() {
    const { menuItem } = this.state
    return (
      <MenuWrapper>
        {menuItem.map((item, index) => this.renderItem(item, index))}
      </MenuWrapper>
    )
  }
}