import styled from 'styled-components'

export const HotelPictureStyled = styled.div`
  min-width: 238px;
  height: 238px;
  box-shadow: 0 0 12px 0 rgba(145,145,145, 0.47);
  border-radius: 5px;
  background: url(${props => props.bgImage});

  @media screen and (min-width: 769px) {
    transform: translate(-25%);
  }
`