import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M9.27,3H6.73L6.411,3.25h3.175L9.27,3z M7.373,5H4.192L3.873,5.25h3.184L7.373,5z M8.636,2.5H7.367L7.048,2.75h1.903 L8.636,2.5z M10.542,4H5.461L5.142,4.25h5.712L10.542,4z M9.905,3.5H6.098L5.78,3.75h4.444L9.905,3.5z M8.002,2L7.683,2.25h0.634 L8.002,2z M11.492,4.75L11.173,4.5H8.002l0.312,0.25H11.492z M8.002,4.5H4.827L4.508,4.75h3.181L8.002,4.5z M9.57,5.75h3.094 l0.044-0.044L12.445,5.5H9.258L9.57,5.75z M8.942,5.25h3.184L11.808,5H8.63L8.942,5.25z M11.917,6.5h-1.403l0.312,0.25h0.837 L11.917,6.5z M11.142,7l0.153,0.122L11.417,7H11.142z M6.433,5.75L6.745,5.5H3.558L3.295,5.706L3.339,5.75H6.433z M12.417,6H9.886 l0.312,0.25h1.966L12.417,6z M5.489,6.5H4.086l0.25,0.25h0.838L5.489,6.5z M4.586,7l0.122,0.122L4.861,7H4.586z M6.117,6H3.586 l0.25,0.25h1.966L6.117,6z M8.002,11.5L4.708,8.878l-1.416,1.416L8.002,14l4.706-3.706l-1.416-1.416L8.002,11.5z' /></svg>
}

const SortDesc = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default SortDesc
