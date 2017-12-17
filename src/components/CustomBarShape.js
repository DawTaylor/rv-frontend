import React from 'react'

export const CustomBarShape = (props) => {
  const { x, y, width, height } = props;
  const xReal = x + width / 2 - 13.5
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{`Rectangle ${x}`}</title>
      <desc>Created using Figma</desc>
      <g id="Canvas" transform="translate(-9517 -925)">
        <g id={`Rectangle ${x}`}>
          <use xlinkHref={`#path${x}_fill`}
          fill={`url(#paint${x}_linear)`}
          fillOpacity="0.7"/>
        </g>
      </g>
      <defs>
        <linearGradient
          id={`paint${x}_linear`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2.9976e-15 -135 27 1.4988e-14 13.5 135)"
        >
          <stop offset="0" stopColor="#EE6F48"/>
          <stop offset="1" stopColor="#F98100"/>
        </linearGradient>
      </defs>
        <path 
          id={`path${x}_fill`}
          fill={`url(#paint${x}_linear)`}
          d={ `
            M${xReal} ${y+height}
            V${y+3}
            C${xReal} ${y+1.34315} ${xReal+1.34315} ${y} ${xReal+3} ${y}
            H${xReal+24}
            C${xReal+24+1.34315} ${y} ${xReal+27} ${y+1.34315} ${xReal+27} ${y+3}
            V${y+height}
            Z
            ` }/>
    </svg>
  )
}