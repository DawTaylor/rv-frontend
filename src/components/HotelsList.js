import React, { Component } from 'react'

import { HotelsFilter } from './HotelsFilter'
import HotelsResults from './HotelsResults'
import { HotelsWrapper, HotelsContentWrapper } from './styled/HotelsListStyled'

export class HotelsList extends Component {
  render() {
    return (
      <HotelsWrapper>
        <h2 className="title">Best choices between date start and date end</h2>
        <HotelsContentWrapper>
          <HotelsFilter />
          <HotelsResults />
        </HotelsContentWrapper>
      </HotelsWrapper>
    )
  }
}