import styled from 'styled-components'

export const MenuWrapper = styled.ul`
  margin-top: 0;
  padding: 35px 0 0 79px;
  list-style: none;
  display: flex;
`

export const MenuItem = styled.li`
  font-family: 'Heebo';
  font-size: 15pt;
  color: #ffffff;
  &:not(:last-child) {
    padding-right:41px;
  }
`

export const MenuItemLink = styled.a`
  color: #ffffff;
  text-decoration: none;
`
