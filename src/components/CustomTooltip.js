import React from 'react'
import { TooltipStyled } from './styled/TooltipStyled'

export const CustomTooltip = (props) => {
  return (
    <TooltipStyled>
      <div className='rectangle'>
        <span className='value'>
          {props.payload.length > 0 ? `$ ${props.payload[0].value}` : ''}
        </span>
      </div>
      <div className='triangle'></div>
    </TooltipStyled>
  )
}