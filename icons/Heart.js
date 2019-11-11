import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M11.75,1C10.126,1,8.716,1.911,8,3.249C7.284,1.911,5.874,1,4.25,1C1.903,1,0,2.903,0,5.25C0,11,8,15,8,15s8-4,8-9.75 C16,2.903,14.097,1,11.75,1z' /></svg>
}

const Heart = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Heart
