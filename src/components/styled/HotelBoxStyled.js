import styled from 'styled-components'

export const HotelBoxWrapper = styled.div`
  display:flex;
  flex-direction: row-reverse;

  .box {
    width: 837px;
    min-height: 318px;
    box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.22);
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 1445px) {
      width: 700px;
    }

    @media screen and (max-width: 768px) {
      padding-top: 20px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center; 
    }
  }
`