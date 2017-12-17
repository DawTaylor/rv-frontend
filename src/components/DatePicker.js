import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import { setDates } from '../modules/dates'

import Calendar from './Calendar'
import { DateWrapper, DateContainer, DateMessage, DateOptionsWrapper, DateOptionsSelected, DateOptionsButton, ActionsWrapper } from './styled/DatePickerStyled'

const mapDispatchToProps = dispatch => bindActionCreators({
  setDates
}, dispatch)

const mapStateToProps = state => {
  const { from, to } = state.dates
  return { from, to }
}

class DatePicker extends Component {
  constructor(props) {
    super(props)

    this.searchHotels = this.searchHotels.bind(this)
  }

  searchHotels() {
  }

  formatDate(date) {
    return (
      <span>
        {moment(date).format('MMMM')} 
          <span className='day'> {moment(date).format('D')}, </span>
        {moment(date).format('YYYY')}
      </span>
    )
  }

  render() {
    const { from, to } = this.props
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
                <div className='date'>{from !== '' ? this.formatDate(from) : 'Select check-in date'}</div>
              </DateOptionsSelected>
              <DateOptionsSelected>
                <div className='title'>CHECK-OUT</div>
                <div className='date'>{to !== '' ? this.formatDate(to) : 'Select check-out date'}</div>
              </DateOptionsSelected>
              <DateOptionsButton onClick={this.searchHotels}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker)