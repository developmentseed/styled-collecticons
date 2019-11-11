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
      <polygon
        points='13.586,7.586 9,12.172 9,0 7,0 7,12.172 2.414,7.586 1,9 8,16 15,9'
      />
    </svg>
  )
}

export const ArrowDown = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
