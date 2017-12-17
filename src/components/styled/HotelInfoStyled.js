import styled from 'styled-components'

export const HotelInfoWrapper = styled.div`
  font-family: 'Heebo';
  display: flex;
  justify-content: space-between;
  min-height: 238px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
  }
`

export const HotelInfoLeft = styled.div`
  width: 402px;

  @media screen and (max-width: 1444px) {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 0 10px;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
    color: #F98100;
    letter-spacing: 1.82px;
    line-height: 26px;
  }
  .description {
    font-weight: normal;
    font-size: 15px;
    color: #b5b5b5;

  }
  .buttons-wrapper {
    margin-top: 45px;
  }
`

export const HotelInfoDivider = styled.div`
  min-height: 238px;
  width: 1px;
  background: #D8D8D8;
  margin: 0 39px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HotelInfoPrice = styled.div`
  width: 86px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1445px) {
    width: 70px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin: 30px 0;
  }

  .price {
    text-align: right;

    @media screen and (max-width: 768px) {
      text-align: center;
    }

    .label {
      font-family: 'Heebo';
      font-weight: 300;
      font-size: 16px;
      letter-spacing: 1.82px;
      color: #B2B0C0;
      margin-bottom: 10px;
    }

    .value {
      font-family: 'Montserrat';
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 3.41px;
      color: #79BD1A;
      margin: 0;

      @media screen and (max-width: 1445px) {
        font-size: 20px;
      }
    }
  }
`
