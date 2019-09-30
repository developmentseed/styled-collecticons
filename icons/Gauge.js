const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M8,14c-3.312,0-6-2.688-6-6s2.688-6,6-6s6,2.688,6,6 S11.312,14,8,14z M8.225,8.016L6.172,5.387l0.575,3.287C6.591,8.912,6.5,9.194,6.5,9.5C6.5,10.328,7.172,11,8,11s1.5-0.672,1.5-1.5 C9.5,8.75,8.947,8.125,8.225,8.016z M8,3C5.581,3,3.562,4.719,3.1,7h1.141C4.412,6.344,4.756,5.744,5.25,5.25 C5.984,4.516,6.963,4.113,8,4.113s2.016,0.403,2.75,1.137c0.494,0.494,0.837,1.094,1.009,1.75H12.9C12.438,4.719,10.419,3,8,3z' /></svg>
}

const Gauge = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Gauge
