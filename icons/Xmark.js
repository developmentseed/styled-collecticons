import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg id='collecticon-' x='0px' y='0px' width='16px' height='16px' viewBox='0 0 16 16' enableBackground='new 0 0 16 16' xmlSpace='preserve' preserveAspectRatio='xMidYMid meet' {...props}><rect id='svgGrid' y={0} fill='none' width='100%' height='100%' /><polygon points='14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414  13.293,14.707 14.707,13.293 9.414,8 ' /></svg>
}

const Xmark = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default Xmark
