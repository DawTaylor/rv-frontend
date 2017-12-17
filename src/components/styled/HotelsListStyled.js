import styled from 'styled-components'

export const HotelsWrapper = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1445px) {
    transform: translateY(-50%);
  }

  @media screen and (min-width: 1024px) {
    transform: translateY(-20%);
  }

  @media screen and (max-width: 768px) {
    transform: translateY(15%);
  }
  
  .title {
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 22px;
    letter-spacing: 2.5px;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #e3e3e3;
    margin-top: 40px; 
  }
`

export const HotelsContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1280px;

  @media screen and (max-width: 1445px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`