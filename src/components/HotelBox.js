import React, { Component } from 'react'

import { HotelPicture } from './HotelPicture'
import { HotelInfo } from './HotelInfo'

import { HotelBoxWrapper } from './styled/HotelBoxStyled'
import { HotelInfoChart } from './HotelInfoChart';

export class HotelBox extends Component {
  render() {
    const { showChart } = this.props
    return (
      <HotelBoxWrapper>
        <div className='box'>
          <HotelPicture />
          {!showChart ? <HotelInfo /> : <HotelInfoChart />}
        </div>
      </HotelBoxWrapper>
    )
  }
}

