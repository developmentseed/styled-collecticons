import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244C11.109,13.375,9.603,14,8,14 s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8c0-1.603,0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2 s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8C14,9.603,13.375,11.109,12.244,12.244z M5,11h2V5H5V11z M9,11h2V5H9V11z' /></svg>
}

const CirclePause = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default CirclePause
