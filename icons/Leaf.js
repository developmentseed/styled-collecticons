import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,0C4.134,0,1,3.134,1,7v9h2v-4c0-3.866,3.134-7,7-7h2c-3.866,0-7,3.134-7,7v2h3c3.866,0,7-3.134,7-7V0H8z' /></svg>
}

const Leaf = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Leaf
