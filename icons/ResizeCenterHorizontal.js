import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M6.999,16h2.002V0H6.999V16z M5.414,5.414L4,4L0,8l4,4l1.414-1.414L3.828,9H6V7H3.828L5.414,5.414z M12,4l-1.414,1.414 L12.172,7H10v2h2.172l-1.586,1.586L12,12l4-4L12,4z' /></svg>
}

const ResizeCenterHorizontal = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default ResizeCenterHorizontal
