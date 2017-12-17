import React, { Component } from 'react'

import { HotelInfoStarsStyled } from './styled/HotelInfoRatingsStyled'
import starFilled from '../assets/img/star-filled.svg'

export class HotelInfoRatings extends Component {
  render() {
    return (
      <HotelInfoStarsStyled starFilled={starFilled}>
        <div className='stars'>
          <div className='star filled' />
          <div className='star filled' />
          <div className='star filled' />
          <div className='star filled' />
          <div className='star filled' />
        </div>
      </HotelInfoStarsStyled>
    )
  }
}
