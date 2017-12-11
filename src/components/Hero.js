import React, { Component } from 'react'

import { Menu } from './Menu'
import { HeroWrapper, HeroContent } from './styled/Hero'

import herobg from '../assets/img/hero.jpg'
import crown from '../assets/img/crown.svg'

export class Hero extends Component {
  render() {
    return (
      <HeroWrapper bgImage={herobg}>
        <Menu />
        <HeroContent>
          <img src={crown} alt='' />
          <div>WELCOME TO</div>
          <div className='divider' />
          <div className='title'>CHARLOTTE</div>
          <div className='divider' />
          <div>THE QUEEN CITY</div>
        </HeroContent>
      </HeroWrapper>
    )
  }
}
