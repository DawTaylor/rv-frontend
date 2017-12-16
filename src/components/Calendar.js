import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'

import { CalendarWrapper, CalendarRow, CalendarLabels, CalendarDays } from './styled/CalendarStyled'

const fetchMonth = () => {
  const month = moment().startOf('month')
  const lastDayOfMonth = moment().endOf('month').format('D')

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
    week[month.day()] = month.format('D')
    cal.dates.push(day)
    if(month.day() === 6 || month.format('D') === lastDayOfMonth) {
      cal.weeks.push(week)
      week = '       '.split('')
    }
    month.add(1, 'day')
  })

  return cal
}

export class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cal: []
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
    return(
      <CalendarRow key={index}>
        {week.map((day, index) => <CalendarDays key={index}>{day}</CalendarDays>)}
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