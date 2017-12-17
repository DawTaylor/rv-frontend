import React, { Component } from 'react'

import { HotelBox } from './HotelBox'

import { HotelsResultsWrapper } from './styled/HotelsResultsStyled'

export class HotelsResults extends Component {
  render() {
    return (
      <HotelsResultsWrapper>
        <HotelBox />
        <HotelBox />
        <HotelBox />
      </HotelsResultsWrapper>
    )
  }
}