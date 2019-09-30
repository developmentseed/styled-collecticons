const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path fill='#010101' d='M8,0C5.609,0,3.463,1.047,2,2.709V0H0v6h6V4H3.528C3.6,3.916,3.681,3.838,3.756,3.756 C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8s-0.625,3.109-1.756,4.244 C11.109,13.375,9.603,14,8,14s-3.113-0.619-4.244-1.756S2,9.603,2,8H0c0,4.419,3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M7,4v4.416 l3.291,3.291l1.416-1.416L9,7.584V4H7z' /></svg>
}

const ClockBack = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ClockBack
