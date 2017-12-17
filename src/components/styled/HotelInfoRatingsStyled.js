import { StarsFilterWrapper } from './RatingFilterStyled'

export const HotelInfoStarsStyled = StarsFilterWrapper.extend`
  margin-top: 0;
  
  .stars {
    margin-top: 10px;

    .star {
      width: 12.66px;
      height: 12.04px;
      margin-right: 4px;
    }
  }
`