import React, { Component } from 'react'

import { Hero } from './components/Hero'
import DatePicker from './components/DatePicker'
import { HotelsList } from './components/HotelsList'

export class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <DatePicker />
        <HotelsList />
      </div>
    );
  }
}
