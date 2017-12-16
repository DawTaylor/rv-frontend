import styled from 'styled-components'

export const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
`

export const DateContainer = styled.div`
  background: #ffffff;
  width: 883px;
  min-height: 455px;
  border-radius: 7px;
  box-shadow: 0px -40px 46px 0px rgba(0,0,0,0.33);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const DateMessage = styled.h3`
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 2.5px;
  margin-top: 65px;
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const DateOptionsWrapper = styled.div`
  width: 100%;
  height: 200px;
  width: 330px;
  display: flex;
  flex-direction: column;
`

export const DateOptionsSelected = styled.div`
  font-family: 'Heebo';
  margin: 23px 0;
  .title {
    font-weight: normal;
    font-size: 22px;
    letter-spacing: 2.5px;
  }
  .date {
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 1.36px;
    color: #B5B5B5;
    margin-top: 10px;
  }
  .date > span {
    font-weight: bold;
  }
`

export const DateOptionsButton = styled.a`
  font-family: 'Heebo';
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border: 2px solid #F98100;
  color: #F98100;
  background: #ffffff;
  border-radius: 27.5px;
  padding: 17px 0;
  width: 180px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #F98100;
  }
`
