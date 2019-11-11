import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M12.706,8.294l-1.416-1.416L9,9.172V0H7v9.172L4.706,6.878L3.291,8.294L8,13L12.706,8.294z M16,14H0v2h16V14z' /></svg>
}

const Download2 = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Download2
