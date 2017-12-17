import styled from 'styled-components'

export const FilterWrapper = styled.div`
  width: 291px;
  margin-bottom: 30px;

  @media screen and (max-width: 1455px) {
    width: 200px;
  }

  @media screen and (max-width: 1024px) {
    width: 800px;
  }

  @media screen and (max-wdith: 768px) {
    width: 100%;
  }

  .title {
    font-family: 'Montserrat';
    font-weigth: normal;
    font-size: 22px;
    letter-spacing: 2.5px;
  }

  .label {
    font-family: 'Heebo';
    font-weight: normal;
    font-size: 12.8px;
    color: #B5B5B5;
  }
`