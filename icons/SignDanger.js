import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M15.006,12.262L8.994,1.737c-0.547-0.956-1.438-0.956-1.984,0L0.994,12.262C0.447,13.219,0.9,14,2,14h12 C15.1,14,15.553,13.219,15.006,12.262z M8,13c-0.691,0-1.25-0.559-1.25-1.25c0-0.691,0.559-1.25,1.25-1.25 c0.691,0,1.25,0.559,1.25,1.25C9.25,12.441,8.691,13,8,13z M9,10H7V5h2V10z' /></svg>
}

const SignDanger = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default SignDanger
