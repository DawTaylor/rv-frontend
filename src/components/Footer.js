import React, { Component } from 'react'

import { FooterWrapper, FooterSocial, FooterCopyright } from './styled/FooterStyled'

import face from '../assets/img/facebook.svg'
import insta from '../assets/img/instagram.svg'
import twitter from '../assets/img/twitter.svg'

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterSocial>
          <a href='#'>
            <img src={face} alt='Facebook' />
          </a>
          <a href='#'>
            <img src={twitter} alt='Facebook' />
          </a>
          <a href='#'>
            <img src={insta} alt='Facebook' />
          </a>
        </FooterSocial>
        <FooterCopyright>
        © 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202
        </FooterCopyright>
      </FooterWrapper>
    )
  }
}