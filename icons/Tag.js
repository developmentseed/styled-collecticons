import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.497,0H9.988C9.162,0,8.007,0.478,7.423,1.063L0.438,8.047c-0.585,0.585-0.585,1.541,0,2.125l5.389,5.389 c0.584,0.585,1.541,0.585,2.125,0l6.984-6.984C15.522,7.993,16,6.838,16,6.012V1.503C16,0.676,15.324,0,14.497,0z M12.5,5 C11.672,5,11,4.328,11,3.5S11.672,2,12.5,2S14,2.672,14,3.5S13.328,5,12.5,5z' /></svg>
}

const Tag = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Tag
