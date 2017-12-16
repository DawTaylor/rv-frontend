import styled from 'styled-components'

export const StarsFilterWrapper = styled.div`
  margin-top: 20px;

  .stars {
    margin-top: 16px;
    display:flex;
    flex-wrap: no-wrap;

    .star {
      width: 26.63px;
      height: 25.33px;
      margin-right: 5px;
      transition: all 0.2s;
      transform: rotate(0deg);
      background-image: url(${props => props.starOutlined});
    }

    .star.filled {
      transform: rotate(360deg);
      background-image: url(${props => props.starFilled});
    }
  }
`