import styled from 'styled-components'

export const CalendarWrapper = styled.div`
  .divider {
    width: 280px;
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
  margin-top: 4.5px;
  margin-bottom: 4.5px;

  .from {
    background: #79BD1A;
    color: #ffffff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    &.only {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  .to {
    background: #79BD1A;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    a {
      background: #ffffff;
      color: #79BD1A;
      border-radius: 20px;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .interval {
    background: #79BD1A;
    color: #ffffff;
  }
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
  width: 40px;
  height:40px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;
  }
`