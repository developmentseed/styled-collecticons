import React from 'react';

import styled from 'styled-components'

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M11.292,8.878L11.139,9h0.275L11.292,8.878z M12.164,9.75h-1.966L9.886,10h2.531L12.164,9.75z M11.664,9.25h-0.837 L10.514,9.5h1.403L11.664,9.25z M8.627,11h3.181l0.319-0.25H8.939L8.627,11z M7.998,14l0.319-0.25H7.683L7.998,14z M6.73,13H9.27 l0.319-0.25H6.411L6.73,13z M6.095,12.5h3.809l0.319-0.25H5.777L6.095,12.5z M7.364,13.5h1.269l0.319-0.25H7.048L7.364,13.5z M5.458,12h5.078l0.319-0.25H5.142L5.458,12z M4.508,11.25l0.319,0.25h3.172l-0.312-0.25H4.508z M9.567,10.25L9.255,10.5h3.188 l0.262-0.206l-0.044-0.044H9.567z M7.998,11.5h3.175l0.319-0.25H8.311L7.998,11.5z M4.705,8.878L4.583,9h0.275L4.705,8.878z M5.173,9.25H4.336L4.086,9.5h1.403L5.173,9.25z M7.058,10.75H3.87L4.189,11H7.37L7.058,10.75z M6.43,10.25H3.336l-0.044,0.044 L3.555,10.5h3.188L6.43,10.25z M5.802,9.75H3.836L3.586,10h2.531L5.802,9.75z M7.998,4.5l3.294,2.622l1.416-1.416L7.998,2 L3.292,5.706l1.416,1.416L7.998,4.5z' /></svg>
}

const SortAsc = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
export default SortAsc
