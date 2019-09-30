const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M7,9h2V4H7V9z M9,11c0-0.553-0.447-1-1-1s-1,0.447-1,1s0.447,1,1,1S9,11.553,9,11z M16,8c0-4.419-3.581-8-8-8S0,3.581,0,8 s3.581,8,8,8S16,12.419,16,8z M14,8c0,1.603-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8z' /></svg>
}

const CircleExclamation = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = CircleExclamation
