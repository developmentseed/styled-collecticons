const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14,0v2.709C12.534,1.047,10.391,0,8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8h-2c0,1.603-0.625,3.109-1.756,4.244 S9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2 s3.109,0.625,4.244,1.756C12.322,3.834,12.4,3.916,12.472,4H10v2h6V0H14z' /></svg>
}

const ArrowSpinCw = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ArrowSpinCw
