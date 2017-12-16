import React, { Component } from 'react'

import { StarsFilterWrapper } from './styled/RatingFilterStyled'

import starOutlined from '../assets/img/star-outline.svg'
import starFilled from '../assets/img/star-filled.svg'

export class StarsFilter extends Component {
  render() {
    return (
      <StarsFilterWrapper starOutlined={starOutlined} starFilled={starFilled} >
        <h1 className='label' > Stars rating </h1>
        <div className='stars'>
          <div className='star filled'></div>
          <div className='star filled'></div>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
        </div>
      </StarsFilterWrapper>
    )
  }
}