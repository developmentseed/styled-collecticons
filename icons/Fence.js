import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14,0l-2,2v2h-2V2L8,0L6,2v2H4V2L2,0L0,2v14h4v-2h2v2h4v-2h2v2h4V2L14,0z M4,12V6h2v6H4z M10,12V6h2v6H10z' /></svg>
}

const Fence = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Fence
