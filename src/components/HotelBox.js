import React, { Component } from 'react'

import { HotelPicture } from './HotelPicture'
import { HotelInfo } from './HotelInfo'

import { HotelBoxWrapper } from './styled/HotelBoxStyled'
import { HotelInfoChart } from './HotelInfoChart';

export class HotelBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showChart: false
    }

    this.toggleChart = this.toggleChart.bind(this)
  }

  toggleChart() {
    this.setState({
      showChart: !this.state.showChart
    })
  }

  render() {
    const { showChart } = this.state
    return (
      <HotelBoxWrapper>
        <div className='box'>
          <HotelPicture />
          {!showChart ? <HotelInfo toggleChart={this.toggleChart} /> : <HotelInfoChart toggleChart={this.toggleChart} />}
        </div>
      </HotelBoxWrapper>
    )
  }
}

