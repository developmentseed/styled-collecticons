const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M15.379,12.379L8.79,5.79C8.913,5.379,9,4.951,9,4.5C9,2.015,6.985,0,4.5,0C4.049,0,3.621,0.087,3.21,0.21l2.291,2.291 c0.828,0.828,0.828,2.17,0,2.998L5.499,5.501c-0.828,0.828-2.17,0.828-2.998,0L0.21,3.21C0.087,3.621,0,4.049,0,4.5 C0,6.985,2.015,9,4.5,9c0.451,0,0.879-0.087,1.29-0.21l6.589,6.589c0.828,0.828,2.17,0.828,2.998,0l0.002-0.002 C16.207,14.549,16.207,13.207,15.379,12.379z M13.75,14.75c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S14.302,14.75,13.75,14.75z' /></svg>
}

const Wrench = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Wrench
