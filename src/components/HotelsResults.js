import React, { Component } from 'react'
import { connect } from 'react-redux'

import { HotelBox } from './HotelBox'

import { HotelsResultsWrapper } from './styled/HotelsResultsStyled'

const mapStateToProps = state => {
  const { hotelsList, ratings, range } = state.hotels
  return { hotelsList, ratings, range }
}

class HotelsResults extends Component {
  render() {
    const { hotelsList, ratings, range } = this.props
    const hotelsFiltered = hotelsList.filter(hotel => hotel.rate >= ratings && hotel.price >= range.start && hotel.price <= range.end)
    return (
      <HotelsResultsWrapper>
        {hotelsFiltered.map((hotel, index) => <HotelBox hotel={hotel} key={index} />)}
      </HotelsResultsWrapper>
    )
  }
}

export default connect(
  mapStateToProps
)(HotelsResults)
