const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M3,10L3,1L0,1L0,10L3,10ZM15,11C15.265,11 15.52,10.895 15.707,10.707C15.895,10.52 16,10.265 16,10C16,8.833 16,6.975 16,6.277C16,6.096 15.951,5.918 15.857,5.762C15.455,5.092 14.295,3.158 13.583,1.971C13.221,1.369 12.57,1 11.868,1C10.397,1 7.805,1 6,1C5.47,1 4.961,1.211 4.586,1.586C4.211,1.961 4,2.47 4,3C4,5.255 4,8.803 4,10.298C4,10.753 4.155,11.193 4.438,11.548C5.477,12.846 8,16 8,16C8,16 8,16 8,16C8.552,16 9,15.552 9,15L9,11L15,11Z' /></svg>
}

const HandThumbsDown = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = HandThumbsDown
