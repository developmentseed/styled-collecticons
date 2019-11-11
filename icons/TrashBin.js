import React from 'react';
import styled from 'styled-components'


const BaseComponent = props => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 16 16'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <rect
        width='100%'
        height='100%'
        id='icon-bound'
        fill='none'
      />
      <path
        d='M11,5h2v8.5c0,0.825-0.675,1.5-1.5,1.5h-7C3.675,15,3,14.325,3,13.5V5h2v8h2V5h2v8h2V5z M2,2h12v2H2V2z M6,0h4v1H6V0z'
        />
    </svg>
  )
}

const TrashBin = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
  fill: ${props => props.fill || props.color || 'black'};
`
export default TrashBin
