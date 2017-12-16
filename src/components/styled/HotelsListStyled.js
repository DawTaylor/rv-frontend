import styled from 'styled-components'

export const HotelsWrapper = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  
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
`