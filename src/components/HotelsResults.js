import React, { Component } from 'react'

import { HotelBox } from './HotelBox'

import { HotelsResultsWrapper } from './styled/HotelsResultsStyled'

export class HotelsResults extends Component {
  render() {
    return (
      <HotelsResultsWrapper>
        <HotelBox showChart={false} />
        <HotelBox showChart={true} />
        <HotelBox showChart={false} />
      </HotelsResultsWrapper>
    )
  }
}