import React, { Component } from 'react'

import { HotelButtonsWrapper, HotelButtonPrice, HotelButtonBook } from './styled/HotelButtonsStyled'

export class HotelButtons extends Component {
  render() {
    return (
      <HotelButtonsWrapper>
        <HotelButtonBook>Book now</HotelButtonBook>
        <HotelButtonPrice onClick={this.props.toggleChart}>Price history</HotelButtonPrice>
      </HotelButtonsWrapper>
    )
  }
}