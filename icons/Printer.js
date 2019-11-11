const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13,1H3v2h10V1z M15,4H1C0.45,4,0,4.45,0,5v5c0,0.55,0.45,1,1,1h2v4h10v-4h2c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z M11,13H5V9h6V13z M14,7c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S14.552,7,14,7z' /></svg>
}

const Printer = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Printer
