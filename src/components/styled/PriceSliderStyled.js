import styled from 'styled-components'

export const PriceSliderStyled = styled.div`
  margin-top: 35px;

  .priceWrapper {
    margin-top: 13px;
  }

  .priceHandler {
    background: #ffffff !important;
    border: 4px solid #F98100 !important;
    width: 22.51px  !important;
    height: 22.51px  !important;
    transition: all 0.1s  !important;

    &:hover,
    &:active {
      background: #F98100  !important;
      transform: scale(1.01, 1.01)  !important
    }
  }

  .priceTrack {
    border: 1px solid #F98100  !important;
  }

  .priceHighlightedTrack {
    background: #F98100  !important;
    border: 1px solid #F98100  !important;
  }
`

export const PriceSliderRange = styled.div`
  font-family: 'Heebo';
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin-top: 14px;

  .price {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2.5px;
    color:#FCC488;
    margin: 9px 0;
  }

  .right {
    text-align: right;
  }
`