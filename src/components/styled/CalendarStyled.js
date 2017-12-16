import styled from 'styled-components'

export const CalendarWrapper = styled.div`
  .divider {
    width: 291px;
    height: 2px;
    background: #E3E3E3;
    margin-bottom: 23px;
  }
  .title {
    font-family: 'Heebo';
    font-weight: normal;
    font-size: 15.8px;
    letter-spacing: 1.8px;
    text-align: center;
    color: #555555;
    margin-bottom: 23px;
  }
`

export const CalendarRow = styled.div`
  display:flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
`
export const CalendarLabels = styled.div`
  font-family: 'Heebo';
  font-weight: bold;
  font-size: 15px;
  color: #b5b5b5;
  margin-bottom: 9px;
`

export const CalendarDays = styled.div`
  font-family: 'Heebo';
  font-weight: regular;
  font-size: 15px;
  color: #555555;
  text-align: center;
  width: 31px;
  height:31px;
`