import React, { Component } from 'react'
import { RangeSlider } from 'reactrangeslider'

import { PriceSliderStyled, PriceSliderRange } from './styled/PriceSliderStyled'

export class PriceSlider extends Component {
  handleChange(event) {
    console.warn(event)
  }

  render() {
    return (
      <PriceSliderStyled>
        <label className='label'>Price Range</label>
        <RangeSlider
          min={100}
          max={600}
          step={5}
          defaultValue={{ start: 100, end: 600 }}
          afterChange={this.handleChange}
          wrapperClassName='priceWrapper'
          handleClassName='priceHandler'
          trackClassName='priceTrack'
          highlightedTrackClassName='priceHighlightedTrack'
        />
        <PriceSliderRange>
          <div className='left'>
            <label className='label'>Min</label>
            <p className='price'>$ 100</p>
          </div>
          <div className='right'>
            <label className='label'>Max</label>
            <p className='price'>$ 600</p>
          </div>
        </PriceSliderRange>
      </PriceSliderStyled>
    )
  }
}