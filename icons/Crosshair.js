import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13.916,7C13.494,4.488,11.512,2.506,9,2.084V0H7v2.084C4.488,2.506,2.506,4.488,2.084,7H0v2h2.084 C2.506,11.512,4.488,13.494,7,13.916V16h2v-2.084c2.512-0.422,4.494-2.403,4.916-4.916H16V7H13.916z M10.828,10.828 C10.072,11.584,9.069,12,8,12s-2.072-0.416-2.828-1.172S4,9.069,4,8s0.416-2.072,1.172-2.828S6.931,4,8,4s2.072,0.416,2.828,1.172 S12,6.931,12,8S11.584,10.072,10.828,10.828z M8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z' /></svg>
}

const Crosshair = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Crosshair
