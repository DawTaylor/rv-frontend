import styled from 'styled-components'

export const HeroWrapper = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: center top;
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  @media screen and (max-width: 1445px) {
    height: 565px;
  }
  @media screen and (max-width: 1024px) {
    height: 391px;
  }
  @media screen and (max-width: 768px) {
    background-size: auto 130%;
    height: 400px;
  }
`

export const HeroContent = styled.div`
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2.6px;
  color: #ffffff;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  * {
    margin-bottom: 15px;
  }

  img {
    width: 54.73px;
    height: 43.51px;
    margin-bottom: 23px;

    @media screen and (max-width: 1024px) {
      width: 27.365px;
      height: 27.755px;
      margin-bottom: 23px;
    }
  }

  .title {
    font-size: 76px;
    letter-spacing: 10.76px;
    margin-bottom: 20px;

    @media screen and (max-width: 1024px) {
      font-size: 38px;
      letter-spacing: 5.38px;
      margin-bottom: 10px;
    }
  }

  .divider {
    width: 602px;
    height: 2px;
    background: #ffffff;
    margin-bottom: 20px;

    @media screen and (max-width: 1024px) {
      width: 288px;
      margin-bottom: 10px;
    }
  }
`