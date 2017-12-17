import React, { Component } from 'react'

import PriceSlider from './PriceSlider'
import StarsFilter from './RatingFilter'
import { FilterWrapper } from './styled/HotelsFilterStyled'

export class HotelsFilter extends Component {
  render() {
    return (
      <FilterWrapper>
          <h3 className="title">Filters</h3>
          <PriceSlider />
          <div className='divider'></div>
          <StarsFilter />
      </FilterWrapper>
    )
  }
}