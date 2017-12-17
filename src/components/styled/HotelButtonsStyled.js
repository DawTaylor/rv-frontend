import styled from 'styled-components'

export const HotelButtonsWrapper = styled.div`
  margin-top: 45px;
`

export const HotelButtonBook = styled.a`
  font-family: 'Heebo';
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  border: 1px solid #F98100;
  color: #F98100;
  background: #ffffff;
  border-radius: 27.5px;
  padding: 11px 27px;
  width: 180px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #F98100;
  }
`

export const HotelButtonPrice = HotelButtonBook.extend`
  border: 1px solid #79BD1A;
  color: #79BD1A;
  margin-left: 20px;
  padding: 11px 33px;

  &:hover {
    background: #79BD1A;
    color: #ffffff;
  }
`