import React from 'react';
import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.238,5.762C13.102,4.626,11.597,4,10,4H3.828l2.586-2.586L5,0L0,5l5,5l1.414-1.414L3.828,6H10 c1.063,0,2.066,0.418,2.824,1.176C13.582,7.934,14,8.937,14,10s-0.418,2.066-1.176,2.824C12.066,13.582,11.063,14,10,14H6v2h4 c1.597,0,3.102-0.626,4.238-1.762S16,11.597,16,10S15.374,6.898,14.238,5.762z' /></svg>
}

const ArrowReturn = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default ArrowReturn
