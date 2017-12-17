import React, { Component } from 'react'

import { HotelPictureStyled } from './styled/HotelPictureStyled'

export class HotelPicture extends Component {
  render() {
    return (
      <HotelPictureStyled bgImage='https://www.raphaelfabeni.com.br/rv/test-resources/hotels/super-8.jpg' />
    )
  }
}
