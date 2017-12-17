import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify'

import { setDates } from '../modules/dates'
import { searchHotels } from '../modules/hotels'

import Calendar from './Calendar'
import { DateWrapper, DateContainer, DateMessage, DateOptionsWrapper, DateOptionsSelected, DateOptionsButton, ActionsWrapper } from './styled/DatePickerStyled'

const mapDispatchToProps = dispatch => bindActionCreators({
  setDates,
  searchHotels
}, dispatch)

const mapStateToProps = state => {
  const { from, to } = state.dates
  return { from, to }
}

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.notify = this.notify.bind(this)
  }

  search() {
    const { from, to } = this.props
    if(from !== '' && to !== '') {
      this.props.searchHotels()
    } else {
      this.notify()
    }
  }

  notify() {
    if(!toast.isActive(this.toastId)) {
      this.toastId = toast.error('Select check-in and check-out dates', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 10000
      })
    }
  }

  toastId = null

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
              <DateOptionsButton onClick={this.search}>
                Search hotels
              </DateOptionsButton>
            </DateOptionsWrapper>
            <Calendar />
          </ActionsWrapper>
        </DateContainer>
        <ToastContainer pauseOnHover={false} />
      </DateWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker)