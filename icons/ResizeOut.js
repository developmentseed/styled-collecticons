import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M1.986,12.6L6.586,8L8,9.414L3.414,14L5.986,14L5.986,16L1.986,16L-0.014,16L-0.014,10L1.986,10L1.986,12.6ZM12.586,2L10.014,2L10.014,0L16.014,0L16.014,6L14.014,6L14.014,3.4L9.414,8L8,6.586L12.586,2Z' /></svg>
}

const ResizeOut = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default ResizeOut
