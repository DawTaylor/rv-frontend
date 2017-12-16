import React, { Component } from 'react'

import { Calendar } from './Calendar'
import { DateWrapper, DateContainer, DateMessage, DateOptionsWrapper, DateOptionsSelected, DateOptionsButton, ActionsWrapper } from './styled/DatePickerStyled'

export class DatePicker extends Component {
  render() {
    return(
      <DateWrapper>
        <DateContainer>
          <DateMessage>
            Select the dates to stay in Charlotte
          </DateMessage>
          <ActionsWrapper>
            <DateOptionsWrapper>
              <DateOptionsSelected>
                <div className='title'>CHECK-IN</div>
                <div className='date'>August <span>13</span>, 2017</div>
              </DateOptionsSelected>
              <DateOptionsSelected>
                <div className='title'>CHECK-OUT</div>
                <div className='date'>August <span>13</span>, 2017</div>
              </DateOptionsSelected>
              <DateOptionsButton>
                Search hotels
              </DateOptionsButton>
            </DateOptionsWrapper>
            <Calendar />
          </ActionsWrapper>
        </DateContainer>
      </DateWrapper>
    )
  }
}
