import React, { Component } from 'react'
import _ from 'lodash'

import { HotelInfoStarsStyled } from './styled/HotelInfoRatingsStyled'
import starFilled from '../assets/img/star-filled.svg'

export class HotelInfoRatings extends Component {
  render() {
    const { rating } = this.props
    const stars = _.range(rating)
    return (
      <HotelInfoStarsStyled starFilled={starFilled}>
        <div className='stars'>
          {stars.map((star, index) => <div className='star filled' key={index} />)}
        </div>
      </HotelInfoStarsStyled>
    )
  }
}
