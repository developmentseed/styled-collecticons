import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13,9v2h-2.488c-0.047-0.006-0.131-0.044-0.169-0.069L7.416,8l2.931-2.931C10.384,5.041,10.469,5.006,10.516,5H13v2l3-3 l-3-3v2h-2.5C9.962,3,9.319,3.266,8.941,3.647L6.584,6H0v4h6.584l2.353,2.353C9.319,12.734,9.959,13,10.497,13h2.5v2l3-3L13,9z' /></svg>
}

const GitFork = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default GitFork
