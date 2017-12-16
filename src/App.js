import React, { Component } from 'react'

import { Hero } from './components/Hero'
import { DateChoser } from './components/DateChooser'
import { HotelsList } from './components/HotelsList'

export class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <DateChoser />
        <HotelsList />
      </div>
    );
  }
}
