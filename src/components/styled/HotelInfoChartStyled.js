import styled from 'styled-components'

export const HotelInfoChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 238px;

  .recharts-text tspan {
    font-family: 'Heebo';
    font-size: 12.8px;
    letter-spacing: 1.45px;
    fill: #B5B5B5;
  }
`

export const HotelInfoChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;

  .title {
    font-family: 'Heebo';
    font-weight: bold;
    margin: 10px 0;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 1.82px;
    color: #F98100;
    text-transform: uppercase;
  }
  
  .back {
    cursor: pointer;
    heigth: 46px;
    display: flex;
    align-items: center;

    img {
      width: 26px;
      height: 14px;
    }

    span {
      font-family: 'Heebo';
      font-size: 12px;
      letter-spacing: 1.36px;
      color: #555555;
      margin-left: 12px;
    }
  }
`
