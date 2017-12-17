import React, { Component } from 'react'

import { HotelPictureStyled } from './styled/HotelPictureStyled'

export class HotelPicture extends Component {
  render() {
    return (
      <HotelPictureStyled bgImage={this.props.image} />
    )
  }
}
