import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,0l0,6h6V4H3.528C3.6,3.916,3.678,3.834,3.756,3.756C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756 C13.375,4.891,14,6.397,14,8s-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14v2c4.419,0,8-3.581,8-8s-3.581-8-8-8 C5.609,0,3.466,1.047,2,2.709V0L0,0z' /></svg>
}

const ArrowSemiSpinCcw = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default ArrowSemiSpinCcw
