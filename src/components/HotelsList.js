import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { HotelsFilter } from './HotelsFilter'
import HotelsResults from './HotelsResults'
import { HotelsWrapper, HotelsContentWrapper } from './styled/HotelsListStyled'

const mapStateToProps = state => {
  const { from, to } = state.dates
  return { from, to }
}

class HotelsList extends Component {
  formatDate(date) {
    return (
      <span>
        {moment(date).format('MMMM')} 
          <span className='day'> {moment(date).format('D')}, </span>
        {moment(date).format('YYYY')}
      </span>
    )
  }

  render() {
    const { from, to } = this.props
    return (
      <HotelsWrapper>
        <h2 className="title">Best choices between {this.formatDate(from)} and {this.formatDate(to)}</h2>
        <HotelsContentWrapper>
          <HotelsFilter />
          <HotelsResults />
        </HotelsContentWrapper>
      </HotelsWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
)(HotelsList)
