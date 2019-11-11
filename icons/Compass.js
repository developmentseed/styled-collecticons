import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M8,14c-3.312,0-6-2.688-6-6s2.688-6,6-6s6,2.688,6,6 S11.312,14,8,14z M6.5,6.5L4,11v1h1l4.5-2.5L12,5V4h-1L6.5,6.5z M8,9C7.447,9,7,8.553,7,8s0.447-1,1-1s1,0.447,1,1S8.553,9,8,9z' /></svg>
}

const Compass = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Compass
