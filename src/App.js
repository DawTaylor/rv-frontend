import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Hero } from './components/Hero'
import DatePicker from './components/DatePicker'
import HotelsLists from './components/HotelsList'

const mapStateToProps = state => {
  const { hotelsList } = state.hotels
  return { hotelsList }
}

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <DatePicker />
        {this.props.hotelsList.length > 0 ? <HotelsLists /> : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(App)
