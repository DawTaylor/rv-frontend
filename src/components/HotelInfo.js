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
    return (
      <HotelInfoWrapper>
        <HotelInfoLeft>
          <HotelInfoRatings />
          <h2 className='title'>Hyatt Place Charlotte Airport/Lake Pointe</h2>
          <p className='description'>This hotel is located 7 miles from downtown Charlotte and 5 miles from Charlotte Douglas International Airport.</p>
          <HotelButtons toggleChart={this.props.toggleChart} />
        </HotelInfoLeft>
        <HotelInfoDivider />
        <HotelInfoPrice>
          <div className='price'>
            <p className='label'>Total</p>
            <p className='value'>$670</p>
          </div>
        </HotelInfoPrice>
      </HotelInfoWrapper>
    )
  }
}