import React, { Component } from 'react'

import { HotelButtons } from './HotelButtons'
import { HotelInfoRatings } from './HotelInfoRatings'
import { HotelInfoWrapper, HotelInfoLeft, HotelInfoDivider, HotelInfoPrice} from './styled/HotelInfoStyled'

export class HotelInfo extends Component {
  constructor(props) {
    super(props)
    this.handleTooltip = this.handleTooltip.bind(this)

    this.state = {
      tooltipPos : {
        y: 0,
        x: 0
      }
    }
  }

  handleTooltip(e) {
    const tooltipPos = {
      x: e.x - 2.5,
      y: e.y - 40
    }
    this.setState({
      tooltipPos
    })
  }

  render() {
    const { hotel } = this.props
    return (
      <HotelInfoWrapper>
        <HotelInfoLeft>
          <HotelInfoRatings rating={hotel.rate} />
          <h2 className='title'>{hotel.name}</h2>
          <p className='description'>{hotel.description}</p>
          <HotelButtons toggleChart={this.props.toggleChart} />
        </HotelInfoLeft>
        <HotelInfoDivider />
        <HotelInfoPrice>
          <div className='price'>
            <p className='label'>Total</p>
            <p className='value'>${hotel.price}</p>
          </div>
        </HotelInfoPrice>
      </HotelInfoWrapper>
    )
  }
}