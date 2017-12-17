import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import { setDates } from '../modules/dates'

import { CalendarWrapper, CalendarRow, CalendarLabels, CalendarDays } from './styled/CalendarStyled'

const fetchMonth = () => {
  const month = moment('2017-08-01').startOf('month')
  const lastDayOfMonth = moment('2017-08-01').endOf('month').format('D')

  const cal = {
    month: month.format('MMMM'),
    year: month.format('YYYY'),
    dates: [],
    weekdays : ['S','M','T','W','T','F','S'],
    weeks: []
  }

  let week = '       '.split('')

  _.times(month.daysInMonth(), () => {
    const day = {
      weekDay: month.format('dd').substring(0,1),
      date: month.format()
    }
    week[month.day()] = month.format()
    cal.dates.push(day)
    if(month.day() === 6 || month.format('D') === lastDayOfMonth) {
      cal.weeks.push(week)
      week = '       '.split('')
    }
    month.add(1, 'day')
  })

  return cal
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setDates
}, dispatch)

const mapStateToProps = state => {
  const { from, to } = state.dates
  return { from, to }
}

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cal: []
    }

    this.pickDate = this.pickDate.bind(this)
  }

  pickDate(date) {
    const { from, to } = this.props
    const datePicked = moment(date)
    if(!from) {
      this.props.setDates({
        from: datePicked
      })
    } else if(from && !to) {
      if(datePicked.isSame(from)) {
        this.props.setDates({
          from: '',
          to: ''
        })
      } else if(datePicked.isBefore(from)) {
        this.props.setDates({
          from: datePicked,
          to: from
        })
      } else {
        this.props.setDates({
          to: datePicked
        })
      }
    } else if(from && to) {
      this.props.setDates({
        from: datePicked,
        to: ''
      })
    }
  }

  componentWillMount() {
    this.setState({
      cal: fetchMonth()
    })
  }

  renderLabels() {
    const { weekdays } = this.state.cal
    return(
      <CalendarRow>
        {weekdays.map((day, index) => <CalendarLabels key={index}>{day}</CalendarLabels>)}
      </CalendarRow>
    )
  }

  renderWeek(week, index) {
    const { from, to } = this.props
    return(
      <CalendarRow key={index}>
        {week.map((day, index) => 
          <CalendarDays
            key={index}
            onClick={() => this.pickDate(day)}
            className={
              moment(day).isSame(from) ? !to ? 'from only' : 'from' : 
                moment(day).isBetween(from, to) ? 'interval' : 
                  moment(day).isSame(to) ? 'to' : null}
          >
            <a>{day !== ' ' ? moment(day).format('D') : ' '}</a>
          </CalendarDays>)}
      </CalendarRow>
    )
  }

  render() {
    return (
      <CalendarWrapper>
        <div className='divider' />
        <div className='title'>
          {this.state.cal.month} / {this.state.cal.year}
        </div>
        {this.renderLabels()}
        <div className='divider' />
        {this.state.cal.weeks.map((week, index) => this.renderWeek(week, index))}
      </CalendarWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)
