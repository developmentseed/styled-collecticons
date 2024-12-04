import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M3,3h8v4h2V1H1v12h6v-2H3V3z M14,8v4.587L7.706,6.294L6.294,7.706L12.587,14H8v2h8V8H14z' /></svg>
}

const ExpandDownRight = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default ExpandDownRight
