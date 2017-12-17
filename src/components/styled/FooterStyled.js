import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 162px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  clear: both;
`

export const FooterSocial = styled.div`
  height:34px;
  width: 147px;
  display: flex;
  justify-content: space-between;

  img {
    width: 34px;
    height: 34px;
  }
`

export const FooterCopyright = styled.div`
  font-family: 'Heebo';
  font-size: 12px;
  color: #b5b5b5;
`