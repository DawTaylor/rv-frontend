import React, { Component } from 'react'
import { connect } from 'react-redux'

import { HotelBox } from './HotelBox'

import { HotelsResultsWrapper } from './styled/HotelsResultsStyled'

const mapStateToProps = state => {
  const { hotelsList } = state.hotels
  return { hotelsList }
}

class HotelsResults extends Component {
  render() {
    const { hotelsList } = this.props
    return (
      <HotelsResultsWrapper>
        {hotelsList.map((hotel, index) => <HotelBox hotel={hotel} key={index} />)}
      </HotelsResultsWrapper>
    )
  }
}

export default connect(
  mapStateToProps
)(HotelsResults)
