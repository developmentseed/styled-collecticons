const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,8c0,4.419,3.581,8,8,8s8-3.581,8-8s-3.581-8-8-8S0,3.581,0,8z M12.891,11.478L4.522,3.109C5.531,2.391,6.734,2,8,2 c1.603,0,3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8C14,9.266,13.609,10.469,12.891,11.478z M2,8 c0-1.266,0.391-2.469,1.109-3.478l8.369,8.369C10.469,13.609,9.266,14,8,14c-1.603,0-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8z' /></svg>
}

const CircleForbidden = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = CircleForbidden
