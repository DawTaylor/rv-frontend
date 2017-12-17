import React, { Component } from 'react'
import { BarChart, Bar, XAxis, Tooltip} from 'recharts'

import { CustomTooltip } from './CustomTooltip'
import { CustomBarShape } from './CustomBarShape'

import { HotelInfoChartHeader, HotelInfoChartWrapper } from './styled/HotelInfoChartStyled'

import arrrowBack from '../assets/img/back-description.svg'

export class HotelInfoChart extends Component {
  constructor(props) {
    super(props)
    this.handleTooltip = this.handleTooltip.bind(this)

    this.state = {
      tooltipPos : {
        y: 0,
        x: 0
      },
      data: [
        {name: 'Jan', value: 240},
        {name: 'Fev', value: 139},
        {name: 'Mar', value: 980},
        {name: 'Apr', value: 390},
        {name: 'May', value: 480},
        {name: 'Jun', value: 380},
        {name: 'Jul', value: 430},
      ]
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
      <HotelInfoChartWrapper>
        <HotelInfoChartHeader>
          <div className='title'>Price history for 2017</div>
          <a className='back' onClick={this.props.toggleChart}>
            <img src={arrrowBack} alt='Back to description' />
            <span>Back to description</span>
          </a>
        </HotelInfoChartHeader>
        <BarChart width={570} height={165} data={this.state.data}>
          <XAxis axisLine={false} dataKey='name' tickLine={false} />
          <Tooltip cursor={false} position={this.state.tooltipPos} content={<CustomTooltip />} />
          <Bar dataKey='value' shape={<CustomBarShape />} onMouseEnter={this.handleTooltip} />
        </BarChart>
      </HotelInfoChartWrapper>
    )
  }
}
