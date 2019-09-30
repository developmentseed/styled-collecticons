const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M10.294,4.294L8,6.584L5.706,4.291L4.291,5.706L6.584,8l-2.294,2.294l1.416,1.416L8,9.416l2.294,2.294l1.416-1.416L9.416,8 l2.294-2.294L10.294,4.294z M8,0C3.581,0,0,3.581,0,8s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244 C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2 s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8S13.375,11.109,12.244,12.244z' /></svg>
}

const CircleXmark = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = CircleXmark
