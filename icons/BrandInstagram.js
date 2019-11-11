import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,4C5.791,4,4,5.791,4,8s1.791,4,4,4s4-1.791,4-4S10.209,4,8,4z M8,10c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S9.103,10,8,10z M11,0H5C2.237,0,0,2.237,0,5v6c0,2.762,2.237,5,5,5h6c2.762,0,5-2.238,5-5V5C16,2.237,13.762,0,11,0z M14,11 c0,1.653-1.347,3-3,3H5c-1.653,0-3-1.347-3-3V5c0-1.653,1.347-3,3-3h6c1.653,0,3,1.347,3,3V11z M12,3c-0.553,0-1,0.447-1,1 s0.447,1,1,1s1-0.447,1-1S12.553,3,12,3z' /></svg>
}

const BrandInstagram = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default BrandInstagram
